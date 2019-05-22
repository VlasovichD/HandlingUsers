using AgileBoard.Models;
using AutoMapper;
using BusinessLogicLayer.DTOs;

namespace AgileBoard.Helpers
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
