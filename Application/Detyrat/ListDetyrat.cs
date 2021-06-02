using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Detyrat
{
    public class ListDetyrat
    {
        public class Query : IRequest<List<Detyra>> {}

        public class Handler : IRequestHandler<Query, List<Detyra>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Detyra>> Handle (Query request, CancellationToken cancellationToken)
            {
                var detyrat = await _context.Detyrat.ToListAsync();

                return detyrat;
            }
        }
    }
}