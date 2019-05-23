using AgileBoard.Helpers;
using AgileBoard.Models;
using AutoMapper;
using BusinessLogicLayer.DTOs;
using BusinessLogicLayer.Infrastructure;
using BusinessLogicLayer.Interfaces;
using HandlingUsers.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Text;

namespace AgileBoard.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UsersController(
            IUserService userService,
            IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        // POST api/users
        [HttpPost]
        public IActionResult Add([FromBody, Bind("Name, Email, Skype, Signature, Avatar")] UserModel user)
        {
            try
            {
                var userDTO = _mapper.Map<UserDTO>(user);
                // TODO: save avatars
                //if (user.Avatar != null)
                //{
                //    byte[] imageData = null;
                //    // считываем переданный файл в массив байтов
                //    using (BinaryReader binaryReader = new BinaryReader(user.Avatar.OpenReadStream()))
                //    {
                //        imageData = binaryReader.ReadBytes((int)user.Avatar.Length);
                //    }
                //    // установка массива байтов
                //    userDTO.Avatar = imageData;
                //}
                // TODO: check verification
                // add user role by default
                userDTO.Role = RoleType.User.ToString();
                // make user enabled by default
                userDTO.Enabled = true;
                // save 
                var newUserDTO = _userService.Create(userDTO);

                return Ok(_mapper.Map<UserModel>(newUserDTO));
            }
            catch (ValidationException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET api/users/{start}/{count}
        [HttpGet("{start}/{count}")]
        public IActionResult Get(int start, int count)
        {
            try
            {
                var userDtos = _userService.Get(start, count);
                
                //TODO: return only id`s, names and small avatars
                                
                return Ok(_mapper.Map<List<UserModel>>(userDtos));
            }
            catch (ValidationException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET api/users/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var userDto = _userService.GetById(id);

                return Ok(_mapper.Map<UserModel>(userDto));
            }
            catch (ValidationException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT api/users/{id}
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody, Bind("Name, Email, Skype, Signature, Avatar, Role, Enabled")] UserModel user)
        {
            try
            {
                // TODO: check update verification
                // map model to dto and set id
                var userDTO = _mapper.Map<UserDTO>(user);
                userDTO.Id = id;

                // TODO: update avatars
                //if (user.Avatar != null)
                //{
                //    byte[] imageData = null;
                //    // считываем переданный файл в массив байтов
                //    using (BinaryReader binaryReader = new BinaryReader(user.Avatar.OpenReadStream()))
                //    {
                //        imageData = binaryReader.ReadBytes((int)user.Avatar.Length);
                //    }
                //    // установка массива байтов
                //    userDTO.Avatar = imageData;
                //}

                // save
                _userService.Update(userDTO);

                return Ok();
            }
            catch (ValidationException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE api/users/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _userService.Delete(id);
                return Ok();
            }
            catch (ValidationException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}