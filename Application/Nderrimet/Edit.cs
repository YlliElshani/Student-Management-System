using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Nderrimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid NderrimiId { get; set; }
            public string Ndrr { get; set; }

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
                var nderrimi = await _context.Nderrimet.FindAsync(request.NderrimiId);

                if (nderrimi == null)
                    throw new Exception("Could not find subject");
                    
                nderrimi.Ndrr = request.Ndrr ?? nderrimi.Ndrr;
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}