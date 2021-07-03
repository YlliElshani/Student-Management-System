using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Periodat
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid PeriodaId { get; set; }
            public string Emri { get; set; }
            public string Fillimi { get; set; }
            public string Mbarimi { get; set; }
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
                var perioda = new Perioda
                {
                    PeriodaId=request.PeriodaId,
                    Emri=request.Emri, 
                    Fillimi=request.Fillimi,
                    Mbarimi=request.Mbarimi
                };

                _context.Periodat.Add(perioda);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}

