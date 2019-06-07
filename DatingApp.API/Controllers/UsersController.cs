using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;
using DatingApp.API.Data;
using DatingApp.API.Dtos;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]

        public async Task<IActionResult> GetUsers(){
            var users =  await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }        

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id) {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto) {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }
            var userFromRepo = await _repo.GetUser(id);
            _mapper.Map(userForUpdateDto, userFromRepo); //Updates values from ufud to ufRepo

            if(await _repo.SaveAll()) {
                return NoContent();
            }

            throw new Exception($"Updating user {id} failed on save");
        }
    }
}