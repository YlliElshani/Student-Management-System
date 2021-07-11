using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using FluentValidation;
using Application.Errors;
using System.Net;

namespace Application.Provimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

            public string Lenda { get; set; }

            public float? OraENisjes { get; set; }

            public float? KoheZgjatja { get; set; }

            public string Salla { get; set; }

            public string Profesori { get; set; }   
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator () 
            {
                RuleFor(x => x.Lenda).NotEmpty();
                RuleFor(x => x.OraENisjes).NotEmpty();
                RuleFor(x => x.KoheZgjatja).NotEmpty();
                RuleFor(x => x.Salla).NotEmpty();
                RuleFor(x => x.Profesori).NotEmpty();
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
                var provimi = await _context.Provimet.FindAsync(request.Id);

                if(provimi == null)
                    throw new RestException(HttpStatusCode.NotFound, new {provimi = "Not Found"});

                    provimi.Lenda = request.Lenda ?? provimi.Lenda;
                    provimi.OraENisjes = request.OraENisjes ?? provimi.OraENisjes;
                    provimi.KoheZgjatja = request.KoheZgjatja ?? provimi.KoheZgjatja;
                    provimi.Salla = request.Salla ?? provimi.Salla;
                    provimi.Profesori = request.Profesori ?? provimi.Profesori;

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}