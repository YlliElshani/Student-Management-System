using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Vleresimet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid VleresimiId { get; set; }
            public string Sudenti {get; set;}
            public string Lenda { get; set; }
            public int Nota { get; set; }
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
                var vleresimi = new Vleresimi
                {
                    VleresimiId=request.VleresimiId,
                    Sudenti=request.Sudenti,
                    Lenda=request.Lenda, 
                    Nota=request.Nota,
                    DataEVendosjes=request.DataEVendosjes,
                    OraEVendosjes=request.OraEVendosjes
                };

                _context.Vleresimet.Add(vleresimi);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}