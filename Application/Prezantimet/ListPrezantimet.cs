using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Prezantimet
{
    public class ListPrezantimet
    {
        public class Query : IRequest<List<Prezantimi>> {}

        public class Handler : IRequestHandler<Query, List<Prezantimi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Prezantimi>> Handle (Query request, CancellationToken cancellationToken)
            {
                var prezantimet = await _context.Prezantimet.ToListAsync();

                return prezantimet;
            }
        }
        
    }
}