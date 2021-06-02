using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Detyrat
{
    public class Details
    {
        public class Query : IRequest <Detyra>
        {
            public Guid DetyraId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Detyra>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Detyra> Handle(Query request, CancellationToken cancellationToken)
            {
                var detyra = await _context.Detyrat.FindAsync(request.DetyraId);

                return detyra;
            }
        }

    }
}