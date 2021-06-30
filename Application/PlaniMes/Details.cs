using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.PlaniMes
{
    public class Details
    {
        public class Query : IRequest<PlaniMesimor>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, PlaniMesimor>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<PlaniMesimor> Handle(Query request, CancellationToken cancellationToken)
            {
                var planiM = await _context.PlaniMesimor.FindAsync(request.Id);
                
                return planiM;
            }
        }
    }
}