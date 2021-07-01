using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Vijushmerit
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  VijushmeriaId {get; set;}
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
                var vijushmeria = await _context.Vijushmerit.FindAsync(request.VijushmeriaId);

                if(vijushmeria == null)
                    throw new Exception("Could not find subject");

                _context.Remove(vijushmeria);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}