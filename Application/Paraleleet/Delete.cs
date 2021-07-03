using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Paraleleet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  ParaleljaaId {get; set;}
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
                var paraleljaa = await _context.Paraleleet.FindAsync(request.ParaleljaaId);

                if(paraleljaa == null)
                    throw new Exception("Could not find subject");

                _context.Remove(paraleljaa);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}