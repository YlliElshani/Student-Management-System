using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Lendet
{
    public class Create
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
                var lenda = new Lenda
                {
                    LendaId=request.LendaId,
                    Emri=request.Emri, 
                    Klasa=request.Klasa,
                    Profesori=request.Profesori,
                    Descripion=request.Descripion
                };

                _context.Lendet.Add(lenda);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}