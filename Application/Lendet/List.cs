using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Lendet
{
    public class List
    {
        public class Query : IRequest<List<Lenda>> {}

        public class Handler : IRequestHandler<Query, List<Lenda>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Lenda>> Handle (Query request, CancellationToken cancellationToken)
            {
                var lendet = await _context.Lendet.ToListAsync();

                return lendet;
            }
        }
        
    }
}