using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Identity;
using Application.Interfaces;

namespace Application.User
{
    public class CurrentUser
    {
        public class Query : IRequest<User> 
        {
            
        }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> _userManager;

            private readonly IJwtGenerator _jwtGenerator;
            
            private readonly IUserAccessor _userAccessor;

            public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;

            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUsername());

                return new User
                {
                    DisplayName = user.DisplayName,
                    Username = user.UserName,
                    Token = _jwtGenerator.CreateToken(user),
                    Image = null,
                    Email = user.Email,
                    Age = user.Age,
                    City = user.City,
                    Address = user.Address,
                    ZipCode = user.ZipCode,
                    PhoneNumber = user.PhoneNumber
                };
            }
        }
    }
}