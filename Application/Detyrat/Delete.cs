using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Detyrat
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  DetyraId {get; set;}
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
                var detyra = await _context.Detyrat.FindAsync(request.DetyraId);

                if(detyra == null)
                    throw new Exception("Could not find user");

                _context.Remove(detyra);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}