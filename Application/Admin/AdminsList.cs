using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;

namespace Application.Admin
{
    public class AdminsList
    {
        public class Query : IRequest<List<AppUser>> {}

        public class Handler : IRequestHandler<Query, List<AppUser>>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<AppUser>> Handle (Query request, CancellationToken cancellationToken)
            {
                var users = await (from user in _context.Users
                                 join userRole in _context.UserRoles
                                 on user.Id equals userRole.UserId
                                 join role in _context.Roles 
                                 on userRole.RoleId equals role.Id
                                 where role.Name == "Admin" 
                                 select user)
                                 .ToListAsync();              
                return users;
            }
        }
    }
}