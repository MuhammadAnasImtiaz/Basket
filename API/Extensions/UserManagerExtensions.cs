using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtensions 
    {
        public static async Task<AppUser> FindByEmailWithAddressAsync(this UserManager<AppUser> input , ClaimsPrincipal user){
            var eamil = user?.Claims?.FirstOrDefault( x => x.Type == ClaimTypes.Email)?.Value;

            return await input.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == eamil);
        }

        public static async Task<AppUser> FindByEmailFromClaimsPrinciple(this UserManager<AppUser> input,ClaimsPrincipal user){
            var eamil = user?.Claims?.FirstOrDefault( x => x.Type == ClaimTypes.Email)?.Value;

            return await input.Users.SingleOrDefaultAsync(x => x.Email == eamil);
        }
    }
}