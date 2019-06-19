using Newtonsoft.Json;
using System.Collections.Generic;
using DatingApp.API.Models;
using DatingApp.API.Controllers;

namespace DatingApp.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }
        
        public void SeedUsers() {

            string userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            List<User> users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach(var user in users) {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);
                
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();

                _context.Users.Add(user);
            }

            _context.SaveChanges();

        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt){
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}