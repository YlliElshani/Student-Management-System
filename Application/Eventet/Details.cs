using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Eventet
{
    public class Details
    {
        public class Query : IRequest<Evente>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Evente>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Evente> Handle(Query request, CancellationToken cancellationToken)
            {
                var evente = await _context.Eventet.FindAsync(request.Id);
                
                return evente;
            }
        }
    }
}