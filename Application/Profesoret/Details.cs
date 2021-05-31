using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Profesoret
{
    public class Details
    {
        public class Query : IRequest<Profesor>
        {
            public Guid UserId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Profesor>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Profesor> Handle(Query request, CancellationToken cancellationToken)
            {
                var profesoret = await _context.Profesoret.FindAsync(request.UserId);
                
                return profesoret;
            }
        }
    }
}