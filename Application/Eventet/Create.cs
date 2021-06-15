using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Eventet
{
    public class Create
    {
        public class Command : IRequest
        {

            public string infoEvent{get; set;}

            public DateTime dataEEventit{get; set;}

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
                var evente=new Evente{
                    infoEvent=request.infoEvent,
                    dataEEventit=request.dataEEventit,
                    kategoria=request.kategoria,
                    vendiMbajtjes=request.vendiMbajtjes
                };

                _context.Eventet.Add(evente);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}