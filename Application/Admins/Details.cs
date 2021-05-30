using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using Domain.obj;
using MediatR;
using Persistence;

namespace Application.Admins
{
    public class Details
    {
        public class Query : IRequest<Admin>
        {
            public Guid UserId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Admin>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Admin> Handle(Query request, CancellationToken cancellationToken)
            {
                var admins = await _context.Admins.FindAsync(request.UserId);
                
                return admins;
            }
        }
    }
}