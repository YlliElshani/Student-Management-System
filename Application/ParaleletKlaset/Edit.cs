using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ParaleletKlaset
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid ParaleljaKlasaId { get; set; }
            public string EmriKl { get; set; }
            public string EmriPar { get; set; }

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
                var paraleljaKlasa = await _context.ParaleletKlaset.FindAsync(request.ParaleljaKlasaId);

                if (paraleljaKlasa == null)
                    throw new Exception("Could not find subject");
                    
                paraleljaKlasa.EmriKl = request.EmriKl ?? paraleljaKlasa.EmriKl;
                paraleljaKlasa.EmriPar = request.EmriPar ?? paraleljaKlasa.EmriPar;
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}