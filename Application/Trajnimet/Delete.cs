using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Trajnimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  TrajnimId {get; set;}
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
                var trajnim = await _context.Trajnimet.FindAsync(request.TrajnimId);

                if(trajnim == null)
                    throw new Exception("Could not find subject");

                _context.Remove(trajnim);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}