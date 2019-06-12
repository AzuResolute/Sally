using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        public PhotosController (
            IDatingRepository repo,
            IMapper mapper,
            IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _repo = repo;
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id) {
            Photo photoFromRepo = await _repo.GetPhoto(id);
            PhotoForReturnDto photo = _mapper.Map<PhotoForReturnDto>(photoFromRepo);
            return Ok(photo);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, [FromForm]PhotosForCreationDto photosForCreationDto) 
        {

            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            User userFromRepo = await _repo.GetUser(userId);
            var file = photosForCreationDto.File;
            
            var uploadResult = new ImageUploadResult();

            if(file.Length > 0) {
                using(var stream = file.OpenReadStream()){
                    var uploadParams = new ImageUploadParams() {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation()
                            .Width(500)
                            .Height(500)
                            .Crop("fill")
                            .Gravity("face")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photosForCreationDto.Url = uploadResult.Uri.ToString();
            photosForCreationDto.PublicID = uploadResult.PublicId;

            // _mapper.Map<Return Value>(Source);
            Photo photo = _mapper.Map<Photo>(photosForCreationDto);

            if(!userFromRepo.Photos.Any(u => u.IsMain)) {
                photo.IsMain = true;
            }

            userFromRepo.Photos.Add(photo);


            if(await _repo.SaveAll())
            {
                PhotoForReturnDto photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new {
                    id = photo.Id
                }, photoToReturn);
            }

            return BadRequest("Could not add the photo");

        }

        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto (int userId, int id) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            User user = await _repo.GetUser(userId);

            if(!user.Photos.Any(p => p.Id == id)) {
                return Unauthorized();
            }

            Photo photoFromRepo = await _repo.GetPhoto(id);

            if(photoFromRepo.IsMain) {
                return BadRequest("This is already the main photo");
            }

            Photo currentMainPhoto = await _repo.GetMainPhotoForUser(userId);

            currentMainPhoto.IsMain = false;
            photoFromRepo.IsMain = true;

            if(await _repo.SaveAll()) {
                return NoContent();
            }

            return BadRequest("Could not set photo to main");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto (int userId, int id) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            User user = await _repo.GetUser(userId);

            if(!user.Photos.Any(p => p.Id == id)) {
                return Unauthorized();
            }

            Photo photoFromRepo = await _repo.GetPhoto(id);

            if(photoFromRepo.IsMain) {
                return BadRequest("You cannot delete the main photo");
            }

            if(photoFromRepo.PublicID != null) {
                DeletionParams deleteParams = new DeletionParams(photoFromRepo.PublicID);
                DeletionResult result = _cloudinary.Destroy(deleteParams);

                if(result.Result == "ok") {
                    _repo.Delete(photoFromRepo);
                }
            }

            if(photoFromRepo.PublicID == null) {
                _repo.Delete(photoFromRepo);
            }

            if(await _repo.SaveAll()) {
                return Ok();
            }

            return BadRequest("Photo cannot be deleted");
        }

    }
}