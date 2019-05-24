using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
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
            var users = JsonConvert.DeserializeObject<User[]>(File.ReadAllText("seed.json"));

            modelBuilder.Entity<User>().HasData(users);

            base.OnModelCreating(modelBuilder);
        }
    }
}
