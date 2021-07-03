using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Paraleleet
{
    public class List
    {
        public class Query : IRequest<List<Paraleljaa>> {}

        public class Handler : IRequestHandler<Query, List<Paraleljaa>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Paraleljaa>> Handle (Query request, CancellationToken cancellationToken)
            {
                var paraleleet = await _context.Paraleleet.ToListAsync();

                return paraleleet;
            }
        }
        
    }
}