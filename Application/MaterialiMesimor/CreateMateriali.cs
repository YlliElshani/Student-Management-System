using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;
using FluentValidation;

namespace Application.MaterialiMesimor
{
    public class CreateMateriali
    {
        public class Command : IRequest
        {
            public Guid id {get; set;}

            public string Titulli {get; set;}

            public string Pershkrimi {get; set;}

            public string Lenda {get; set;}

            public string Perioda {get; set;}

            public string FileDrop {get; set;}
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator () 
            {
                RuleFor(x => x.Titulli).NotEmpty();
                RuleFor(x => x.Pershkrimi).NotEmpty();
                RuleFor(x => x.Lenda).NotEmpty();
                RuleFor(x => x.Perioda).NotEmpty();
                RuleFor(x => x.FileDrop).NotEmpty();
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
                var materiali = new Materiali
                {
                    id = request.id,
                    Titulli = request.Titulli,
                    Pershkrimi = request.Pershkrimi,
                    Lenda = request.Lenda,
                    Perioda = request.Perioda,
                    FileDrop = request.FileDrop
                };

                _context.Materialet.Add(materiali);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
