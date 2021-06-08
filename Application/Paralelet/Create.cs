using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Paralelet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid ParaleljaId { get; set; }
            public string Klasa { get; set; }
            public string Paralele { get; set; }
            public string Kujdestari { get; set; }
            public int NrNxenesve { get; set; }
            public string Gjenerata { get; set; }
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
                var paralelja = new Paralelja
                {
                    ParaleljaId=request.ParaleljaId,
                    Klasa=request.Klasa, 
                    Paralele=request.Paralele,
                    Kujdestari=request.Kujdestari,
                    NrNxenesve=request.NrNxenesve,
                    Gjenerata=request.Gjenerata
                };

                _context.Paralelet.Add(paralelja);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}