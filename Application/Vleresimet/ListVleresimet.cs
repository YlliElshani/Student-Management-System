using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Vleresimet
{
    public class ListVleresimet
    {
        public class Query : IRequest<List<Vleresimi>> {}

        public class Handler : IRequestHandler<Query, List<Vleresimi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Vleresimi>> Handle (Query request, CancellationToken cancellationToken)
            {
                var vleresimet = await _context.Vleresimet.ToListAsync();

                return vleresimet;
            }
        }
        
    }
}