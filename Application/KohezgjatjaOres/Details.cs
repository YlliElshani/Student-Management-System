using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.KohezgjatjaOres
{
    public class Details
    {
        public class Query : IRequest <Kohezgjatja>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Kohezgjatja>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Kohezgjatja> Handle(Query request, CancellationToken cancellationToken)
            {
                var koheZ = await _context.Kohezgjatjet.FindAsync(request.Id);

                return koheZ;
            }
        }
    }
}