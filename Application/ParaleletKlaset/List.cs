using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ParaleletKlaset
{
    public class List
    {
        public class Query : IRequest<List<ParaleljaKlasa>> {}

        public class Handler : IRequestHandler<Query, List<ParaleljaKlasa>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<ParaleljaKlasa>> Handle (Query request, CancellationToken cancellationToken)
            {
                var paraleletKlaset = await _context.ParaleletKlaset.ToListAsync();

                return paraleletKlaset;
            }
        }
        
    }
}