using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Arsyetimet
{
    public class ListaArsyetimeve
    {
        public class Query : IRequest<List<Arsyetim>> {} 

        public class Handler : IRequestHandler<Query, List<Arsyetim>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Arsyetim>> Handle (Query request, CancellationToken cancellationToken)
            {
                var arsye = await _context.Arsyet.ToListAsync();

                return arsye;
            }
        }
        
    }
}