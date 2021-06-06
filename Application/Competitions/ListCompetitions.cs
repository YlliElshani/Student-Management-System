using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Competitions
{
    public class ListCompetitions
    {
        public class Query : IRequest<List<Competition>> {}

        public class Handler : IRequestHandler<Query, List<Competition>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Competition>> Handle (Query request, CancellationToken cancellationToken)
            {
                var competitions = await _context.Competitions.ToListAsync();

                return competitions;
            }
        }
    }
}