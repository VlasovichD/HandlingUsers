using Microsoft.AspNetCore.Http;

namespace AgileBoard.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public string Signature { get; set; }
        public IFormFile Avatar { get; set; }
        public string Role { get; set; }
        public bool Enabled { get; set; }
    }
}
