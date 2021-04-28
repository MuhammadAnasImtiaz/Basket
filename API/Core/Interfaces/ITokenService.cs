using API.Entities.Identity;

namespace API.Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser appUser);
    }
}