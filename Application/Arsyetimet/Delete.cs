using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Arsyetimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  Id {get; set;}
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
                var arsyeja = await _context.Arsyet.FindAsync(request.Id);

                if(arsyeja == null)
                    throw new Exception("Could not find reason");

                _context.Remove(arsyeja);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}