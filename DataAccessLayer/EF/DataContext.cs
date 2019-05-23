using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.EF
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var jsonUsersList = System.IO.File.ReadAllText("seed.json");
            var states = JsonConvert.DeserializeObject<List<User>>(jsonUsersList);

            modelBuilder.Entity<User>().HasData(states
                 //new User { Id = 1, Name = "Ivan Ivanov", Email = "ivanov@test.com", Skype = null, Signature = null, Avatar = null, Role = null, Enabled = true },
                 //new User { Id = 2, Name = "Petr Petrov", Email = "petrov@test.com", Skype = null, Signature = null, Avatar = null, Role = null, Enabled = true }
                 );

            base.OnModelCreating(modelBuilder);
        }
    }
}
