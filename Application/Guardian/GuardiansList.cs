using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Application.Guardian
{
    public class GuardiansList
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
                var users = await _context.AppUser.ToListAsync();                
                return users;
            }
        }
    }
}