using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.VitetAkademike
{
    public class List
    {
        public class Query : IRequest<List<VitiAkademik>> {}

        public class Handler : IRequestHandler<Query, List<VitiAkademik>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<VitiAkademik>> Handle (Query request, CancellationToken cancellationToken)
            {
                var vitetAkademike = await _context.VitetAkademike.ToListAsync();

                return vitetAkademike;
            }
        }
        
    }
}