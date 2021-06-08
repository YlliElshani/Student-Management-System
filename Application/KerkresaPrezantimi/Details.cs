using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.KerkesaPrezantimi
{
    public class Details
    {
        public class Query : IRequest <KerkesaPrezantimit>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, KerkesaPrezantimit>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<KerkesaPrezantimit> Handle(Query request, CancellationToken cancellationToken)
            {
                var kerkesa = await _context.KerkesaP.FindAsync(request.Id);

                return kerkesa;
            }
        }

    }
}