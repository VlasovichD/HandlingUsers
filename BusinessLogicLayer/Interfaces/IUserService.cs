using BusinessLogicLayer.DTOs;
using System.Collections.Generic;

namespace BusinessLogicLayer.Interfaces
{
    public interface IUserService
    {
        UserDTO Create(UserDTO userDTO);
        IEnumerable<UserDTO> Get(int start, int count, bool enabled, string searchName);
        UserDTO GetById(int userId);
        void Update(UserDTO userDTO);
        void Delete(int userId);
    }
}
