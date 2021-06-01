using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Notat
{
    public class Details
    {
        public class Query : IRequest <Nota>
        {
            public Guid NotaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Nota>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Nota> Handle(Query request, CancellationToken cancellationToken)
            {
                var nota = await _context.Notat.FindAsync(request.NotaId);

                return nota;
            }
        }
    }
}