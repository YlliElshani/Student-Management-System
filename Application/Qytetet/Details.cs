using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Qytetet
{
    public class Details
    {
        public class Query : IRequest <Qyteti>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Qyteti>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Qyteti> Handle(Query request, CancellationToken cancellationToken)
            {
                var qyteti = await _context.Qytetet.FindAsync(request.Id);

                return qyteti;
            }
        }
    }
}