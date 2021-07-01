using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Vijushmerit
{
    public class List
    {
        public class Query : IRequest<List<Vijushmeria>> {}

        public class Handler : IRequestHandler<Query, List<Vijushmeria>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Vijushmeria>> Handle (Query request, CancellationToken cancellationToken)
            {
                var vijushmerit = await _context.Vijushmerit.ToListAsync();

                return vijushmerit;
            }
        }
        
    }
}