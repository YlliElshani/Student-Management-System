using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Application.Errors;
using System.Net;

namespace Application.Trips
{
    public class TripDetails
    {
        public class Query : IRequest <Trip>
        {
            public Guid tripId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Trip>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Trip> Handle(Query request, CancellationToken cancellationToken)
            {
                var trip = await _context.Trips.FindAsync(request.tripId);

                if(trip == null)
                    throw new RestException(HttpStatusCode.NotFound, new {trip = "Not Found"});

                return trip;
            }
        }

    }
}