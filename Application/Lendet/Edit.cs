using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Lendet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid LendaId { get; set; }
            public string Emri { get; set; }
            public string Klasa { get; set; }
            public string Profesori { get; set; }
            public string Descripion { get; set; }

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

                if (lenda == null)
                    throw new Exception("Could not find subject");
                    
                lenda.Emri = request.Emri ?? lenda.Emri;
                lenda.Klasa = request.Klasa ?? lenda.Klasa;
                lenda.Profesori = request.Profesori ?? lenda.Profesori;
                lenda.Descripion = request.Descripion ?? lenda.Descripion;
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}