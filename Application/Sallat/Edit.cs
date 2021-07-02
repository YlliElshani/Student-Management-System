using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Sallat
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid SallaId {get; set;}
            public string Emri {get; set;}
            public int? Kapaciteti {get; set;}
            public string Statusi {get; set;}
            public string DataRezervimit {get; set;}
            public string OraRezervimit {get; set;}
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
                var salla = await _context.Sallat.FindAsync(request.SallaId);

                if (salla == null)
                    throw new Exception("Could not find");
                    
                salla.Emri = request.Emri ?? salla.Emri;
                salla.Kapaciteti = request.Kapaciteti ?? salla.Kapaciteti;
                salla.Statusi = request.Statusi ?? salla.Statusi;
                salla.DataRezervimit = request.DataRezervimit ?? salla.DataRezervimit;
                salla.OraRezervimit = request.OraRezervimit ?? salla.OraRezervimit;
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}