using AutoMapper;
using BusinessLogicLayer.DTOs;
using BusinessLogicLayer.Infrastructure;
using BusinessLogicLayer.Interfaces;
using DataAccessLayer.Entities;
using DataAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLogicLayer.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _database;
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork uow, IMapper mapper)
        {
            _database = uow;
            _mapper = mapper;
        }

        public UserDTO Create(UserDTO userDTO)
        {
            var user = _mapper.Map<User>(userDTO);

            // validation
            if (string.IsNullOrWhiteSpace(userDTO.Name))
                throw new ValidationException("Name is required");

            if (string.IsNullOrWhiteSpace(userDTO.Email))
                throw new ValidationException("Email is required");

            var users = _database.Users.GetAll().ToList();

            if (users.Any(x => x.Name == user.Name))
                throw new ValidationException($"Name \"{user.Name}\" is already taken");



            _database.Users.Create(user);
            _database.Save();

            return _mapper.Map<UserDTO>(user);
        }

        public IEnumerable<UserDTO> Get(int start, int count, bool enabled, string searchName)
        {
            IEnumerable<User> users;

            if (!string.IsNullOrEmpty(searchName))
            {
                users = _database.Users.Find(u => u.Enabled == enabled && u.Name == searchName).Skip(start).Take(count);
            }
            else
            {
                users = _database.Users.Find(u => u.Enabled == enabled).Skip(start).Take(count);
            }
            

            if (users == null)
                throw new ValidationException("List of users is empty");

            return _mapper.Map<List<UserDTO>>(users);
        }

        public UserDTO GetById(int userId)
        {
            var user = _database.Users.GetById(userId);

            return _mapper.Map<UserDTO>(user);
        }

        public void Update(UserDTO userParam)
        {
            var user = _database.Users.GetById(userParam.Id);

            if (user == null)
                throw new ValidationException("User not found");

            // check if Name is not empty and changed
            if (!string.IsNullOrWhiteSpace(userParam.Name) && userParam.Name != user.Name)
            {
                // username has changed so check if the new username is already taken
                var users = _database.Users.GetAll().ToList();

                if (users.Any(x => x.Name == userParam.Name))
                    throw new ValidationException($"Name \"{user.Name}\" is already taken");

                user.Name = userParam.Name;
            }

            // update other user properties if entered
            if (!string.IsNullOrWhiteSpace(userParam.Email))
                user.Email = userParam.Email;

            if (!string.IsNullOrWhiteSpace(userParam.Skype))
                user.Skype = userParam.Skype;

            if (!string.IsNullOrWhiteSpace(userParam.Signature))
                user.Signature = userParam.Signature;

            if (userParam.Avatar != null && userParam.Avatar != user.Avatar)
                user.Avatar = userParam.Avatar;

            if (!string.IsNullOrWhiteSpace(userParam.Role))
                user.Role = userParam.Role;

            if (userParam.Enabled != user.Enabled)
                user.Enabled = userParam.Enabled;

            _database.Save();
        }

        public void Delete(int userId)
        {
            var user = _database.Users.GetById(userId);

            if (user == null)
            {
                throw new ValidationException("User not found");
            }

            _database.Users.Delete(userId);
            _database.Save();

        }
    }
}
