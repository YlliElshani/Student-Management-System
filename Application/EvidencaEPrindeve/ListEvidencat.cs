using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.EvidencatEPrinderve
{
    public class ListEvidencat
    {
        public class Query : IRequest<List<EvidencaPrindeve>> {}

        public class Handler : IRequestHandler<Query, List<EvidencaPrindeve>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<EvidencaPrindeve>> Handle (Query request, CancellationToken cancellationToken)
            {
                var evidenca = await _context.Evidencat.ToListAsync();

                return evidenca;
            }
        }
        
    }
}