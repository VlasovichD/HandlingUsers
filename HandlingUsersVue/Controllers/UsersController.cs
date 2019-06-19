using AutoMapper;
using BusinessLogicLayer.DTOs;
using BusinessLogicLayer.Infrastructure;
using BusinessLogicLayer.Interfaces;
using HandlingUsersVue.Helpers;
using HandlingUsersVue.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace HandlingUsersVue.Controllers
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
            ValidateModel(user);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userDTO = _mapper.Map<UserDTO>(user);

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

        // GET api/users/{start}/{count}/{enabled}/?searchName=}
        [HttpGet("{start}/{count}/{enabled}")]
        public IActionResult Get(int start, int count, bool enabled, [FromQuery] string searchName = null)
        {
            try
            {
                var userDtos = _userService.Get(start, count, enabled, searchName);

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
            ValidateModel(user);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                // map model to dto and set id
                var userDTO = _mapper.Map<UserDTO>(user);
                userDTO.Id = id;

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

        // POST api/users/{id}/avatar
        [HttpPost("{id}/avatar")]
        [DisableFormValueModelBinding]
        public IActionResult UpdateAvtar(int id, [FromForm] IFormFile avatar)
        {
            try
            {
                // map model to dto and set id
                var userDTO = new UserDTO();
                userDTO.Id = id;

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    avatar.CopyTo(memoryStream);
                    userDTO.Avatar = memoryStream.ToArray();
                }

                // save
                _userService.UpdateAvatar(userDTO);

                return Ok(userDTO.Avatar);
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

        private void ValidateModel(UserModel user)
        {
            if (user == null)
            {
                ModelState.AddModelError("", "No data for user");
            }

            if (string.IsNullOrWhiteSpace(user.Name))
            {
                ModelState.AddModelError("Name", "Name is not set");
            }

            if (user.Name.Length > 50)
            {
                ModelState.AddModelError("Name", "Name must be no more than 50 letters");
            }

            if (!Regex.IsMatch(user.Name, @"^[A-Za-z\s]+$"))
            {
                ModelState.AddModelError("Name", "Name must have only letters and spaces");
            }

            if (string.IsNullOrWhiteSpace(user.Email))
            {
                ModelState.AddModelError("Email", "Email is not set");
            }

            if (!Regex.IsMatch(user.Email, @"^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$", RegexOptions.IgnoreCase))
            {
                ModelState.AddModelError("Email", "Email is not valid");
            }

            if (user.Skype.Length > 50)
            {
                ModelState.AddModelError("Skype", "Skype must be no more than 50 symbols");
            }

            if (user.Signature.Length > 280)
            {
                ModelState.AddModelError("Signature", "Signature must be no more than 280 letters");
            }
        }
    }
}