using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.PlaniMes
{
    public class ListPlanetM
    {
        public class Query : IRequest<List<PlaniMesimor>> {}

        public class Handler : IRequestHandler<Query, List<PlaniMesimor>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<PlaniMesimor>> Handle (Query request, CancellationToken cancellationToken)
            {
                var planetM = await _context.PlaniMesimor.ToListAsync();

                return planetM;
            }
        }
        
    }
}