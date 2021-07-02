using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.KohezgjatjaOres
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
                var kohaZ = await _context.Kohezgjatjet.FindAsync(request.Id);

                if(kohaZ == null)
                    throw new Exception("Could not find user");

                _context.Remove(kohaZ);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}