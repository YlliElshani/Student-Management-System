using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ParaleletKlaset
{
    public class Details
    {
        public class Query : IRequest <ParaleljaKlasa>
        {
            public Guid ParaleljaKlasaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, ParaleljaKlasa>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<ParaleljaKlasa> Handle(Query request, CancellationToken cancellationToken)
            {
                var paraleljaKlasa = await _context.ParaleletKlaset.FindAsync(request.ParaleljaKlasaId);

                return paraleljaKlasa;
            }
        }
    }
}