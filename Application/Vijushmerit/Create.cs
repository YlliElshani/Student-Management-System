using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Vijushmerit
{
    public class Create
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
                var vijushmeria = new Vijushmeria
                {
                    VijushmeriaId=request.VijushmeriaId,
                    Pjesmarrja=request.Pjesmarrja, 
                    Studenti=request.Studenti
                };

                _context.Vijushmerit.Add(vijushmeria);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}