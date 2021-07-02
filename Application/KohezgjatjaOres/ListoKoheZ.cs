using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.KohezgjatjaOres
{
    public class ListoKoheZ
    {
        public class Query : IRequest<List<Kohezgjatja>> {}

        public class Handler : IRequestHandler<Query, List<Kohezgjatja>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Kohezgjatja>> Handle (Query request, CancellationToken cancellationToken)
            {
                var koheZ = await _context.Kohezgjatjet.ToListAsync();

                return koheZ;
            }
        }
        
    }
}