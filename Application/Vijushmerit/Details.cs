using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Vijushmerit
{
    public class Details
    {
        public class Query : IRequest <Vijushmeria>
        {
            public Guid VijushmeriaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Vijushmeria>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Vijushmeria> Handle(Query request, CancellationToken cancellationToken)
            {
                var vijushmeria = await _context.Vijushmerit.FindAsync(request.VijushmeriaId);

                return vijushmeria;
            }
        }
    }
}