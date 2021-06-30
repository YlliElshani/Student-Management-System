using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Klaset
{
    public class Details
    {
        public class Query : IRequest <Klasa>
        {
            public Guid KlasaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Klasa>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Klasa> Handle(Query request, CancellationToken cancellationToken)
            {
                var klasa = await _context.Klaset.FindAsync(request.KlasaId);

                return klasa;
            }
        }
    }
}