using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Prezantimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid  prezantimiId {get; set;}
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
                var prezantimi = await _context.Prezantimet.FindAsync(request.prezantimiId);

                if(prezantimi == null)
                    throw new Exception("Could not find");

                _context.Remove(prezantimi);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
        
    }
}