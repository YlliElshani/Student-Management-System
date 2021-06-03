using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Trajnimet
{
    public class Edit
    {
        public class Command : IRequest
        {
        public Guid TrajnimId {get; set;}
        public string TrajnimEmri {get; set;}
        public string Pershkrimi {get; set;}
        public int? numriDiteve{get; set;}
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
                var trajnim = await _context.Trajnimet.FindAsync(request.TrajnimId);

                if(trajnim == null)
                    throw new Exception ("Could not find trip");

               trajnim.TrajnimEmri = request.TrajnimEmri ?? trajnim.TrajnimEmri;
               trajnim.Pershkrimi = request.Pershkrimi ?? trajnim.Pershkrimi;
               trajnim.numriDiteve = request.numriDiteve ?? trajnim.numriDiteve;
      

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}