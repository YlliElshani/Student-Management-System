using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Trips
{
    public class ListTrips
    {
        public class Query : IRequest<List<Trip>> {}

        public class Handler : IRequestHandler<Query, List<Trip>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Trip>> Handle (Query request, CancellationToken cancellationToken)
            {
                var trips = await _context.Trips.ToListAsync();

                return trips;
            }
        }
    }
}