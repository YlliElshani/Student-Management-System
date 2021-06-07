using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Arsyetimet
{
    public class Details
    {
        public class Query : IRequest<Arsyetim>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Arsyetim>
        {
            private readonly DataContext _context;
 
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Arsyetim> Handle(Query request, CancellationToken cancellationToken)
            {
                var arsyeja = await _context.Arsyet.FindAsync(request.Id);
                
                return arsyeja;
            }
        }
    }
}