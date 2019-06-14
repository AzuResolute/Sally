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

        [HttpGet("thread/{recipientId}")]
        public async Task<IActionResult> GetMessageThread (int userId, int recipientId) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            IEnumerable<Message> messagesFromRepo = await _repo.GetMessageThread(userId, recipientId);

            IEnumerable<MessageToReturnDto> messageThread = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);

            return Ok(messageThread);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage (int userId, MessageForCreationDto messageForCreationDto) {
            User sender = await _repo.GetUser(userId);

            if(sender.Id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            messageForCreationDto.SenderId = userId;
            User recipient = await _repo.GetUser(messageForCreationDto.RecipientId);

            if(recipient == null) {
                return BadRequest("Could not find user");
            }

            Message messageCreated = _mapper.Map<Message>(messageForCreationDto);

            _repo.Add(messageCreated);

            if(await _repo.SaveAll()){
                MessageToReturnDto messageToReturn = _mapper.Map<MessageToReturnDto>(messageCreated);
                return CreatedAtRoute("GetMessage", new {messageId = messageCreated.Id}, messageToReturn);
            }

            throw new Exception("Failed on Save");
        }

        [HttpPost("{messageId}")]
        public async Task<IActionResult> DeleteMessage(int messageId, int userId) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            Message messageFromRepo = await _repo.GetMessage(messageId);

            if(messageFromRepo.SenderId == userId) {
                messageFromRepo.SenderDeleted = true;
            }

            if(messageFromRepo.RecipientId == userId) {
                messageFromRepo.RecipientDeleted = true;
            }

            if(messageFromRepo.RecipientDeleted && messageFromRepo.SenderDeleted) {
                _repo.Delete(messageFromRepo);
            }

            if(await _repo.SaveAll()) {
                return NoContent();
            }

            throw new Exception("Error Deleting the message");
        }

        [HttpPost("{messageId}/read")]
        public async Task<IActionResult> MarkMessageAsRead(int userId, int messageId) {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            Message message = await _repo.GetMessage(messageId);

            if (message.RecipientId != userId) {
                return Unauthorized();
            }

            message.IsRead = true;
            message.DateRead = DateTime.Now;

            if(await _repo.SaveAll()) {
                return NoContent();
            }

            throw new Exception("Reading failed");
        }
    }
}