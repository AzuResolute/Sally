using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using DatingApp.API.Data;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IConfiguration _config;
        public UsersController(IDatingRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpGet]

        public async Task<IActionResult> GetUsers(){
            var users =  await _repo.GetUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id) {
            var user = await _repo.GetUser(id);
            return Ok(user);
        }
    }
}