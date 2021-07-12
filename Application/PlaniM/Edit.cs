using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.PlaniM
{
    public class Edit
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
                var planiM = await _context.PlanetMesimor.FindAsync(request.Id);

                if (planiM == null)
                    throw new Exception("Could not find planiM");
                    
                planiM.PlaniInfo=request.PlaniInfo ?? request.PlaniInfo;
                planiM.KriteriPlotsimit=request.KriteriPlotsimit ?? request.KriteriPlotsimit;
                planiM.Lenda=request.Lenda ?? request.Lenda;
                planiM.EmriKl=request.EmriKl ?? request.EmriKl;
                planiM.EmriPar=request.EmriPar ?? request.EmriPar;

                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}