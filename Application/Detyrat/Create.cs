using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.Detyrat
{
    public class Create
    {
        public class Command : IRequest
        {
        public Guid DetyraId {get; set;}
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
                var detyra = new Detyra
                {
                    DetyraId = request.DetyraId,
                    DetyraEmri = request.DetyraEmri,
                    Pershkrimi = request.Pershkrimi,
                };

                _context.Detyrat.Add(detyra);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
