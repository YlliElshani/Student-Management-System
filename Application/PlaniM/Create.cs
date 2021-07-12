using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.PlaniM
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string PlaniInfo { get; set; }
            public string KriteriPlotsimit { get; set; }
            
             public string Lenda { get; set; }
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
                var planiM = new PlaniMesimor
                {
                    Id=request.Id,
                    PlaniInfo=request.PlaniInfo,
                    KriteriPlotsimit=request.KriteriPlotsimit,
                    Lenda=request.Lenda,
                    EmriKl=request.EmriKl,
                    EmriPar=request.EmriPar
                };

                _context.PlanetMesimor.Add(planiM);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}