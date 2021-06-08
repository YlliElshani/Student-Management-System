using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Paralelet
{
    public class Details
    {
        public class Query : IRequest <Paralelja>
        {
            public Guid ParaleljaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Paralelja>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Paralelja> Handle(Query request, CancellationToken cancellationToken)
            {
                var paralelja = await _context.Paralelet.FindAsync(request.ParaleljaId);

                return paralelja;
            }
        }
    }
}