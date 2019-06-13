using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;
using DatingApp.API.Helpers;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T: class {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T: class {
            _context.Remove(entity);
        }

        public async Task<Like> GetLike(int userId, int recipientId) {
            return await _context.Likes.FirstOrDefaultAsync(u => 
                u.LikerId == userId && u.LikeeId == recipientId);
        }

        public async Task<bool> SaveAll() {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams) {

            IQueryable<User> users = _context.Users
                .Include(u => u.Photos)
                .OrderByDescending(u => u.LastActive)
                .AsQueryable();

            users = users.Where(u => u.Id != userParams.UserId);

            users = users.Where(u => u.Gender == userParams.Gender);

            if(userParams.Likers) {
                IEnumerable<int> userLikers = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => userLikers.Contains(u.Id));
            }

            if(userParams.Likees) {
                IEnumerable<int> userLikees = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => userLikees.Contains(u.Id));
            }

            if (userParams.MinAge != 18 || userParams.MaxAge != 65) {
                
                DateTime minDOB = DateTime.Today.AddYears(-userParams.MaxAge - 1);
                DateTime maxDOB = DateTime.Today.AddYears(-userParams.MinAge);

                users = users.Where(u => u.DateOfBirth >= minDOB && u.DateOfBirth < maxDOB);
            }

            if (!string.IsNullOrEmpty(userParams.OrderBy)) {
                switch (userParams.OrderBy) {
                    case "created":
                        users = users.OrderByDescending(u => u.Created);
                        break;
                    default:
                        users = users.OrderByDescending(u => u.LastActive);
                        break;
                }
            }

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        private async Task<IEnumerable<int>> GetUserLikes(int id, bool likers){
            User user = await _context.Users
                .Include(u => u.Likers)
                .Include(u => u.Likees)
                .FirstOrDefaultAsync(u => u.Id == id);

            if(likers) {
                return user.Likers.Where(u => u.LikeeId == id).Select(i => i.LikerId);
            }
            else {
                return user.Likees.Where(u => u.LikerId == id).Select(i => i.LikeeId);
            }
        }

        public async Task<User> GetUser(int id) {

            User user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<Photo> GetPhoto(int id) {
            Photo photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);
            return photo;
        }

        public async Task<Photo> GetMainPhotoForUser(int userId) {
            Photo photo = await _context.Photos.Where(u => u.UserId == userId).FirstOrDefaultAsync(p => p.IsMain);
            return photo;
        }

        public async Task<Message> GetMessage (int messageId) {
           return await _context.Messages.FirstOrDefaultAsync(m => m.Id == messageId);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams) {
            IQueryable<Message> messages = _context.Messages
                .Include(u => u.Sender).ThenInclude(p => p.Photos)
                .Include(u => u.Recipient).ThenInclude(p => p.Photos)
                .AsQueryable();

            switch (messageParams.MessageContainer) {
                case "Inbox":
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId);
                    break;
                case "Outbox":
                    messages = messages.Where(u => u.SenderId == messageParams.UserId);
                    break;
                default: //Unread Messages
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId && !u.IsRead);
                    break;
            }

            messages = messages.OrderByDescending(m => m.MessageSent);

            return await PagedList<Message>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);
        }

        public Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId){
            throw new NotImplementedException();
        }
    }
}