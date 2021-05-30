using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Parents
{
    public class ListParents
    {
        public class Query : IRequest<List<Parent>> { }


        public class Handler : IRequestHandler<Query, List<Parent>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Parent>> Handle(Query request, CancellationToken cancellationToken)
            {
                var parents= await _context.Parents.ToListAsync();

                return parents;
            }
        }
    }
}