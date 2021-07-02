using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Periodat
{
    public class Details
    {
        public class Query : IRequest <Perioda>
        {
            public Guid PeriodaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Perioda>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Perioda> Handle(Query request, CancellationToken cancellationToken)
            {
                var perioda = await _context.Periodat.FindAsync(request.PeriodaId);

                return perioda;
            }
        }
    }
}