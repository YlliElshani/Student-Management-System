using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Competitions
{
    public class DeleteCompetition
    {
        public class Command : IRequest
        {
            public Guid competitionId {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var competition = await _context.Competitions.FindAsync(request.competitionId);

                if(competition == null)
                    throw new Exception("Could not find competition");

                _context.Remove(competition);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}