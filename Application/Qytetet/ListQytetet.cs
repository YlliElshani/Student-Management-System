using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Qytetet
{
    public class ListQytetet
    {
        public class Query : IRequest<List<Qyteti>> { }


        public class Handler : IRequestHandler<Query, List<Qyteti>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Qyteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var qytetet= await _context.Qytetet.ToListAsync();

                return qytetet;
            }
        }
    }
}