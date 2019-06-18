using HandlingUsersVue.Models;
using AutoMapper;
using BusinessLogicLayer.DTOs;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Http.Internal;

namespace HandlingUsersVue.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserModel, UserDTO>();
            CreateMap<UserDTO, UserModel>();
        }
    }
}
