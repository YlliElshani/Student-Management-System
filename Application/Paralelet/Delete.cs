using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Paralelet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  ParaleljaId {get; set;}
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
                var paralelja = await _context.Paralelet.FindAsync(request.ParaleljaId);

                if(paralelja == null)
                    throw new Exception("Could not find subject");

                _context.Remove(paralelja);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}