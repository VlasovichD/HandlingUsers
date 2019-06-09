using HandlingUsers.Models;
using AutoMapper;
using BusinessLogicLayer.DTOs;

namespace HandlingUsers.Helpers
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
