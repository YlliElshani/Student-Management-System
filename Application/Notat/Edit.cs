using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Notat
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid NotaId { get; set; }
            public string Lenda { get; set; }
            public int? Grade { get; set; }
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
                var nota = await _context.Notat.FindAsync(request.NotaId);

                if (nota == null)
                    throw new Exception("Could not find grade");
                    
                nota.Lenda = request.Lenda ?? nota.Lenda;
                nota.Grade = request.Grade ?? nota.Grade;
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}