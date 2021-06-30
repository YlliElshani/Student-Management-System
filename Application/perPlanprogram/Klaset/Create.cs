using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Klaset
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid KlasaId { get; set; }
            public string EmriKl { get; set; }
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
                var klasa = new Klasa
                {
                    KlasaId=request.KlasaId,
                    EmriKl=request.EmriKl 
                   
                };

                _context.Klaset.Add(klasa);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}