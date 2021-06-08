using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.KerkesaNdihme
{
    public class ListoKerkesatN
    {
        public class Query : IRequest<List<KerkesaNdihmes>> {} 

        public class Handler : IRequestHandler<Query, List<KerkesaNdihmes>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<KerkesaNdihmes>> Handle (Query request, CancellationToken cancellationToken)
            {
                var kerkese = await _context.KerkesaN.ToListAsync();

                return kerkese;
            }
        }
        
    }
}