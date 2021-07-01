using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Vleresimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  VleresimiId {get; set;}
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
                var vleresimi = await _context.Vleresimet.FindAsync(request.VleresimiId);

                if(vleresimi == null)
                    throw new Exception("Could not find grade");

                _context.Remove(vleresimi);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}