using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Eventet
{
    public class Edit
    {
    public class Command : IRequest
        {

            public Guid Id { get; set; }
            public string infoEvent{get; set;}

            public DateTime? dataEEventit{get; set;}

            public string kategoria{get; set;}

            public string vendiMbajtjes{get; set;}

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
                var evente=await _context.Eventet.FindAsync(request.Id);

                if(evente==null) throw new Exception("Error Ac");


                evente.infoEvent=request.infoEvent ?? evente.infoEvent;

                evente.kategoria=request.kategoria ?? evente.kategoria;

                evente.vendiMbajtjes=request.vendiMbajtjes ?? evente.vendiMbajtjes;

                evente.dataEEventit=request.dataEEventit ?? evente.dataEEventit;

                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}