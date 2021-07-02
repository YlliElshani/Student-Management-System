using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ParaleletKlaset
{
    public class Create
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
                var paraleljaKlasa = new ParaleljaKlasa
                {
                    ParaleljaKlasaId=request.ParaleljaKlasaId,
                    EmriKl=request.EmriKl,
                    EmriPar=request.EmriPar, 
                };

                _context.ParaleletKlaset.Add(paraleljaKlasa);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}