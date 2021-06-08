using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.KerkesaNdihme
{
    public class Details
    {
        public class Query : IRequest <KerkesaNdihmes>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, KerkesaNdihmes>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<KerkesaNdihmes> Handle(Query request, CancellationToken cancellationToken)
            {
                var kerkesa = await _context.KerkesaN.FindAsync(request.Id);

                return kerkesa;
            }
        }

    }
}