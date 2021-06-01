using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.Trips
{
    public class CreateTrip
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
                var trip = new Trip
                {
                    tripId = request.tripId,
                    name = request.name,
                    place = request.place,
                    date = request.date,
                    description = request.description,
                    participants = request.participants,
                    price = request.price
                };

                _context.Trips.Add(trip);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
