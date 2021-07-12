using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.EvidencatEPrinderve
{
    public class Details
    {
        public class Query : IRequest<EvidencaPrindeve>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, EvidencaPrindeve>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<EvidencaPrindeve> Handle(Query request, CancellationToken cancellationToken)
            {
                var evidence = await _context.Evidencat.FindAsync(request.Id);
                
                return evidence;
            }
        }
    }
}