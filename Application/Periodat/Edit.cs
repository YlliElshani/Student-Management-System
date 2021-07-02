using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Periodat
{
    public class Edit
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
                var perioda = await _context.Periodat.FindAsync(request.PeriodaId);

                if (perioda == null)
                    throw new Exception("Could not find subject");
                    
                perioda.Emri = request.Emri ?? perioda.Emri;
                perioda.Fillimi = request.Fillimi ?? perioda.Fillimi;
                perioda.Mbarimi = request.Mbarimi ?? perioda.Mbarimi;
   

                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}