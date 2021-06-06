using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Details
    {
        public class Query : IRequest<Njoftime>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Njoftime>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Njoftime> Handle(Query request, CancellationToken cancellationToken)
            {
                var njoftimet = await _context.Njoftimet.FindAsync(request.Id);
                
                return njoftimet;
            }
        }
    }
}