using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using Application.Errors;
using System.Net;

namespace Application.Trips
{
    public class DeleteTrips
    {
        public class Command : IRequest
        {
            public Guid  tripId {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var trip = await _context.Trips.FindAsync(request.tripId);

                if(trip == null)
                    throw new RestException(HttpStatusCode.NotFound, new {trip = "Not Found"});

                _context.Remove(trip);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}