using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessLayer.Entities
{
    public class User
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Name is not set")]
        [MaxLength(50)]
        [RegularExpression(@"^[A-Za-z\s]+$", ErrorMessage = "Name must have only letters and spaces")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email is not set")]
        [EmailAddress]
        public string Email { get; set; }
        [MaxLength(50)]
        public string Skype { get; set; }
        [MaxLength(280)]
        public string Signature { get; set; }
        public byte[] Avatar { get; set; }
        public string Role { get; set; }
        public bool Enabled { get; set; }
    }
}