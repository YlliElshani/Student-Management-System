using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Trajnimet
{
    public class Details
    {
        public class Query : IRequest <Trajnim>
        {
            public Guid TrajnimId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Trajnim>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Trajnim> Handle(Query request, CancellationToken cancellationToken)
            {
                var trajnim = await _context.Trajnimet.FindAsync(request.TrajnimId);

                return trajnim;
            }
        }
    }
}