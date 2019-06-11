using HandlingUsersVue.Models;
using AutoMapper;
using BusinessLogicLayer.DTOs;

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
