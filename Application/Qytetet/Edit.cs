using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Qytetet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Emri { get; set; }
            public string Shteti { get; set; }
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
                var qyteti = await _context.Qytetet.FindAsync(request.Id);

                if (qyteti == null)
                    throw new Exception("Could not find city");
                    
                qyteti.Emri = request.Emri ?? qyteti.Emri;
                qyteti.Shteti = request.Shteti ?? qyteti.Shteti;
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}