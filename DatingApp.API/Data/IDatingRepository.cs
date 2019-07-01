using System.Threading.Tasks;
using System.Collections.Generic;
using DatingApp.API.Models;
using DatingApp.API.Helpers;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<PagedList<User>> GetUsers(UserParams UserParams);
         Task<User[]> GetUsersStats();
         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
         Task<Like> GetLike(int userId, int recepientId);
         Task<Message> GetMessage (int messageId);
         Task<PagedList<Message>> GetMessagesForUser(MessageParams MessageParams); // Empty for now
         Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);
    }
}