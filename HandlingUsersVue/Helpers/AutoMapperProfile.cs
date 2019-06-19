using AutoMapper;
using BusinessLogicLayer.DTOs;
using HandlingUsersVue.Models;

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
