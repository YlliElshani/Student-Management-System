using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Eventet
{
    public class ListEventet
    {
        public class Query : IRequest<List<Evente>> {}

        public class Handler : IRequestHandler<Query, List<Evente>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Evente>> Handle (Query request, CancellationToken cancellationToken)
            {
                var eventet = await _context.Eventet.ToListAsync();

                return eventet;
            }
        }
        
    }
}