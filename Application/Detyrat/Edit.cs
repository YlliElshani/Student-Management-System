using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Detyrat
{
    public class Edit
    {
        public class Command : IRequest
        {
        public Guid DetyraId {get; set;}
        public string Lenda {get; set;}
        public string Klasa {get; set;}
        public string Profesori {get; set;}
        public string DetyraEmri {get; set;}
        public string Pershkrimi {get; set;}
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
                var detyra = await _context.Detyrat.FindAsync(request.DetyraId);

                if(detyra == null)
                    throw new Exception ("Could not find user");

                detyra.Lenda = request.Lenda ?? detyra.Lenda;
                detyra.Klasa = request.Klasa ?? detyra.Klasa;
                detyra.Profesori = request.Profesori ?? detyra.Profesori;
                detyra.DetyraEmri = request.DetyraEmri ?? detyra.DetyraEmri;
                detyra.Pershkrimi = request.Pershkrimi ?? detyra.Pershkrimi;
                

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}