using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Nderrimet
{
    public class List
    {
        public class Query : IRequest<List<Nderrimi>> {}

        public class Handler : IRequestHandler<Query, List<Nderrimi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Nderrimi>> Handle (Query request, CancellationToken cancellationToken)
            {
                var nderrimet = await _context.Nderrimet.ToListAsync();

                return nderrimet;
            }
        }
        
    }
}