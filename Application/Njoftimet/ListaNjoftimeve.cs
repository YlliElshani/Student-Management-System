using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Njoftimet
{
    public class ListaNjoftimeve
    {
        public class Query : IRequest<List<Njoftime>> {}

        public class Handler : IRequestHandler<Query, List<Njoftime>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Njoftime>> Handle (Query request, CancellationToken cancellationToken)
            {
                var njoftimet = await _context.Njoftimet.ToListAsync();

                return njoftimet;
            }
        }
        
    }
}