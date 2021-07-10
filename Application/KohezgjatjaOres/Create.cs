using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.KohezgjatjaOres
{
    public class Create
    {
        public class Command : IRequest
        {
        public Guid Id {get; set;}
        public float kohaMin {get; set;}
        public float oraNisjes {get; set;}
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
                var kohaZ = new Kohezgjatja
                {
                    Id=request.Id,
                    kohaMin=request.kohaMin,
                    oraNisjes=request.oraNisjes
                };

                _context.Kohezgjatjet.Add(kohaZ);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
