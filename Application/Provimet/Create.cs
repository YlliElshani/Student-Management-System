using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;
using FluentValidation;

namespace Application.Provimet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

            public string Lenda { get; set; }

            public float OraENisjes { get; set; }

            public float KoheZgjatja { get; set; }

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
                var provimi = new Provimi
                {
                    Id = request.Id,
                    Lenda = request.Lenda,
                    OraENisjes = request.OraENisjes,
                    KoheZgjatja = request.KoheZgjatja,
                    Salla = request.Salla,
                    Profesori = request.Profesori
                };

                _context.Provimet.Add(provimi);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
