using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Sallat
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid SallaId {get; set;}
            public string Emri {get; set;}
            public int Kapaciteti {get; set;}
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
                var salla = new Salla
                {
                    SallaId=request.SallaId,
                    Emri=request.Emri,
                    Kapaciteti=request.Kapaciteti,
                    Statusi=request.Statusi,
                    DataRezervimit=request.DataRezervimit,
                    OraRezervimit=request.OraRezervimit
                };

                _context.Sallat.Add(salla);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}