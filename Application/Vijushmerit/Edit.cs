using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Vijushmerit
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid VijushmeriaId { get; set; }
            public string Pjesmarrja { get; set; }
            public string Studenti { get; set; }

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
                var vijushmeria = await _context.Vijushmerit.FindAsync(request.VijushmeriaId);

                if (vijushmeria == null)
                    throw new Exception("Could not find subject");
                    
                vijushmeria.Pjesmarrja = request.Pjesmarrja ?? vijushmeria.Pjesmarrja;
                vijushmeria.Studenti = request.Studenti ?? vijushmeria.Studenti;

                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}