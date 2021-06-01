using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Notat
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid NotaId { get; set; }
            public string Lenda { get; set; }

            public int Grade { get; set; }
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
                var nota = new Nota
                {
                    NotaId=request.NotaId,
                    Lenda=request.Lenda,
                    Grade=request.Grade
                };

                _context.Notat.Add(nota);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}