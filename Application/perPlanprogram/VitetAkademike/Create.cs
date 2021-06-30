using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.VitetAkademike
{
    public class Create
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
                var vitiAkademik = new VitiAkademik
                {
                    VitiAkademikId=request.VitiAkademikId,
                    VitiAk=request.VitiAk 
                   
                };

                _context.VitetAkademike.Add(vitiAkademik);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}