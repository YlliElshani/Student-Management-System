using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MaterialiMesimor
{
    public class ListMaterialet
    {
        public class Query : IRequest<List<Materiali>> {}

        public class Handler : IRequestHandler<Query, List<Materiali>>
        {
            private readonly DataContext _context;
        

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Materiali>> Handle (Query request, CancellationToken cancellationToken)
            {
                var materialet = await _context.Materialet.ToListAsync();

                return materialet;
            }
        }
    }
}