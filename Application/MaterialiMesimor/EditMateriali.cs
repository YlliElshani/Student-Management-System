using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using FluentValidation;
using Application.Errors;
using System.Net;

namespace Application.MaterialiMesimor
{
    public class EditMateriali
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
                var materiali = await _context.Materialet.FindAsync(request.id);

                if(materiali == null)
                    throw new RestException(HttpStatusCode.NotFound, new {materiali = "Not Found"});

                    materiali.Titulli = request.Titulli ?? materiali.Titulli;
                    materiali.Pershkrimi = request.Pershkrimi ?? materiali.Pershkrimi;
                    materiali.Lenda = request.Lenda ?? materiali.Lenda;
                    materiali.Perioda = request.Perioda ?? materiali.Perioda;
                    materiali.FileDrop = request.FileDrop ?? materiali.FileDrop;

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}