using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Periodat
{
    public class List
    {
        public class Query : IRequest<List<Perioda>> {}

        public class Handler : IRequestHandler<Query, List<Perioda>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Perioda>> Handle (Query request, CancellationToken cancellationToken)
            {
                var periodat = await _context.Periodat.ToListAsync();

                return periodat;
            }
        }
        
    }
}