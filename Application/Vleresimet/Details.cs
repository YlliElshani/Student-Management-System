using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Vleresimet
{
    public class Details
    {
        public class Query : IRequest <Vleresimi>
        {
            public Guid VleresimiId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Vleresimi>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Vleresimi> Handle(Query request, CancellationToken cancellationToken)
            {
                var vleresimi = await _context.Vleresimet.FindAsync(request.VleresimiId);

                return vleresimi;
            }
        }
    }
}