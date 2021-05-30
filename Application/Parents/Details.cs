using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Parents
{
    public class Details
    {
         public class Query : IRequest<Parent>
        {
            public Guid UserId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Parent>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Parent> Handle(Query request, CancellationToken cancellationToken)
            {
                var parents = await _context.Parents.FindAsync(request.UserId);
                
                return parents;
            }
        }
    }
}