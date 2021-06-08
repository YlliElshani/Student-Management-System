using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Paralelet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid ParaleljaId { get; set; }
            public string Klasa { get; set; }
            public string Paralele { get; set; }
            public string Kujdestari { get; set; }
            public int? NrNxenesve { get; set; }
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
                var paralelja = await _context.Paralelet.FindAsync(request.ParaleljaId);

                if (paralelja == null)
                    throw new Exception("Could not find subject");
                    
                paralelja.Klasa = request.Klasa ?? paralelja.Klasa;
                paralelja.Paralele = request.Paralele ?? paralelja.Paralele;
                paralelja.Kujdestari= request.Kujdestari ?? paralelja.Kujdestari;
                paralelja.NrNxenesve = request.NrNxenesve ?? paralelja.NrNxenesve;
                paralelja.Gjenerata = request.Gjenerata ?? paralelja.Gjenerata;
               
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}