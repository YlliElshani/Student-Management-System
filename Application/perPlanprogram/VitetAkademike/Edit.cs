using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.VitetAkademike
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid VitiAkademikId { get; set; }
            public string VitiAk { get; set; }

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
                var vitiAkademik = await _context.VitetAkademike.FindAsync(request.VitiAkademikId);

                if (vitiAkademik == null)
                    throw new Exception("Could not find subject");
                    
                vitiAkademik.VitiAk = request.VitiAk ?? vitiAkademik.VitiAk;
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}