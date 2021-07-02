using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Paraleleet
{
    public class Details
    {
        public class Query : IRequest <Paraleljaa>
        {
            public Guid ParaleljaaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Paraleljaa>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Paraleljaa> Handle(Query request, CancellationToken cancellationToken)
            {
                var paraleljaa = await _context.Paraleleet.FindAsync(request.ParaleljaaId);

                return paraleljaa;
            }
        }
    }
}