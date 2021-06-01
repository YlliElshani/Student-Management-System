using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Trips
{
    public class EditTrips
    {
        public class Command : IRequest
        {
            public Guid tripId {get; set;}
            
            public string name {get; set;}

            public string place {get; set;}

            public string date {get; set;}

            public string description {get; set;}

            public string participants {get; set;}

            public string price {get; set;}
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
                    throw new Exception ("Could not find trip");

               trip.name = request.name ?? trip.name;
               trip.place = request.place ?? trip.place;
               trip.date = request.date ?? trip.date;
               trip.description = request.description ?? trip.description;
               trip.participants = request.participants ?? trip.participants;
               trip.price = request.price ?? trip.price;

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}