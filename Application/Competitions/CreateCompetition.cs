using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;
using FluentValidation;

namespace Application.Competitions
{
    public class CreateCompetition
    {
        public class Command : IRequest
        {
            public Guid competitionId {get; set;}
        
            public string name {get; set;}

            public string date {get; set;}

            public string description {get; set;}

            public string field {get; set;}

            public string awards {get; set;}
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator () 
            {
                RuleFor(x => x.name).NotEmpty();
                RuleFor(x => x.date).NotEmpty();
                RuleFor(x => x.description).NotEmpty();
                RuleFor(x => x.field).NotEmpty();
                RuleFor(x => x.awards).NotEmpty();
            }
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
                var competition = new Competition
                {
                    competitionId = request.competitionId,
                    name = request.name,
                    date = request.date,
                    description = request.description,
                    field = request.field,
                    awards = request.awards
                };

                _context.Competitions.Add(competition);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
