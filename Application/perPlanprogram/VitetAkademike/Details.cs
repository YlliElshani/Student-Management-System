using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.VitetAkademike
{
    public class Details
    {
        public class Query : IRequest <VitiAkademik>
        {
            public Guid VitiAkademikId {get; set;}
        }

        public class Handler : IRequestHandler<Query, VitiAkademik>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<VitiAkademik> Handle(Query request, CancellationToken cancellationToken)
            {
                var vitiAkademik = await _context.VitetAkademike.FindAsync(request.VitiAkademikId);

                return vitiAkademik;
            }
        }
    }
}