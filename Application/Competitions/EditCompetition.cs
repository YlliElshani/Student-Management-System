using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using FluentValidation;
using Application.Errors;
using System.Net;

namespace Application.Competitions
{
    public class EditCompetition
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
                var competition = await _context.Competitions.FindAsync(request.competitionId);

                if(competition == null)
                    throw new RestException(HttpStatusCode.NotFound, new {competition = "Not Found"});

                competition.name = request.name ?? competition.name;
                competition.date = request.date ?? competition.date;
                competition.description = request.description ?? competition.description;
                competition.field = request.field ?? competition.field;
                competition.awards = request.awards ?? competition.awards;

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}