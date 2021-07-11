using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Provimet
{
    public class List
    {
        public class Query : IRequest<List<Provimi>> {}

        public class Handler : IRequestHandler<Query, List<Provimi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Provimi>> Handle (Query request, CancellationToken cancellationToken)
            {
                var provimet = await _context.Provimet.ToListAsync();

                return provimet;
            }
        }
    }
}