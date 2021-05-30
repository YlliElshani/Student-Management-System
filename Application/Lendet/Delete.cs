using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Lendet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  LendaId {get; set;}
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
                var lenda = await _context.Lendet.FindAsync(request.LendaId);

                if(lenda == null)
                    throw new Exception("Could not find subject");

                _context.Remove(lenda);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}