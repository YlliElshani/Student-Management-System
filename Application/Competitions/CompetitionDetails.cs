using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Competitions
{
    public class CompetitionDetails
    {
        public class Query : IRequest <Competition>
        {
            public Guid competitionId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Competition>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Competition> Handle(Query request, CancellationToken cancellationToken)
            {
                var competition = await _context.Competitions.FindAsync(request.competitionId);

                return competition;
            }
        }

    }
}