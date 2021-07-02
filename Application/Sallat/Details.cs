using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Sallat
{
    public class Details
    {
        public class Query : IRequest <Salla>
        {
            public Guid SallaId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Salla>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Salla> Handle(Query request, CancellationToken cancellationToken)
            {
                var salla = await _context.Sallat.FindAsync(request.SallaId);

                return salla;
            }
        }
    }
}