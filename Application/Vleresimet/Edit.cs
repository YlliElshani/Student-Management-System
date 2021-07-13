using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Vleresimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid VleresimiId { get; set; }
            public string Studenti {get; set;}
            public string Lenda { get; set; }
            public int? Nota { get; set; }
            public string DataEVendosjes {get; set;}
            public string OraEVendosjes {get; set;}

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
                var vleresimi = await _context.Vleresimet.FindAsync(request.VleresimiId);

                if (vleresimi == null)
                    throw new Exception("Could not find subject");
                
                vleresimi.Studenti = request.Studenti ?? vleresimi.Studenti;
                vleresimi.Lenda = request.Lenda ?? vleresimi.Lenda;
                vleresimi.Nota = request.Nota ?? vleresimi.Nota;
                vleresimi.DataEVendosjes = request.DataEVendosjes ?? vleresimi.DataEVendosjes;
                vleresimi.OraEVendosjes = request.OraEVendosjes ?? vleresimi.OraEVendosjes;
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}