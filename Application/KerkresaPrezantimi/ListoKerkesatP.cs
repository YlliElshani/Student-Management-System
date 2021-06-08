using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.KerkesaPrezantimi
{
    public class ListoKerkesatP
    {
        public class Query : IRequest<List<KerkesaPrezantimit>> {} 

        public class Handler : IRequestHandler<Query, List<KerkesaPrezantimit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<KerkesaPrezantimit>> Handle (Query request, CancellationToken cancellationToken)
            {
                var kerkeseP = await _context.KerkesaP.ToListAsync();

                return kerkeseP;
            }
        }
        
    }
}