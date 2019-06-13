using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route("api/users/{userId}/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public MessagesController(IDatingRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{messageId}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage (int userId, int messageId) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }
            
            Message message = await _repo.GetMessage(messageId);
            
            if(message == null){
                return NotFound();
            }

            return Ok(message);
        }

        [HttpGet]
        public async Task<IActionResult> GetMessagesForUser(int userId, [FromQuery]MessageParams MessageParams) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            MessageParams.UserId = userId;

            PagedList<Message> messagesFromRepo = await _repo.GetMessagesForUser(MessageParams);

            IEnumerable<MessageToReturnDto> messagesForUser = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);

            Response.AddPagination(
                messagesFromRepo.CurrentPage,
                messagesFromRepo.PageSize,
                messagesFromRepo.TotalCount,
                messagesFromRepo.TotalPages);

            return Ok(messagesForUser);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage (int userId, MessageForCreationDto messageForCreationDto) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            messageForCreationDto.SenderId = userId;
            User recipient = await _repo.GetUser(messageForCreationDto.RecipientId);

            if(recipient == null) {
                return BadRequest("Could not find user");
            }

            Message messageCreated = _mapper.Map<Message>(messageForCreationDto);

            _repo.Add(messageCreated);

            MessageForCreationDto messageToReturn = _mapper.Map<MessageForCreationDto>(messageCreated);

            if(await _repo.SaveAll()){
                return CreatedAtRoute("GetMessage", new {messageId = messageCreated.Id}, messageToReturn);
            }

            throw new Exception("Failed on Save");
        }
    }
}