using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Nderrimet
{
    public class Details
    {
        public class Query : IRequest <Nderrimi>
        {
            public Guid NderrimiId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Nderrimi>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Nderrimi> Handle(Query request, CancellationToken cancellationToken)
            {
                var nderrimi = await _context.Nderrimet.FindAsync(request.NderrimiId);

                return nderrimi;
            }
        }
    }
}