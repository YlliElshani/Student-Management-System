using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Profesoret
{
    public class Create
    {
        public class Command : IRequest
        {

            public string GradaAkademike {get; set;}

            public string Studimet {get; set;}

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
                var profesoret=new Profesor{
                    GradaAkademike=request.GradaAkademike,
                    Studimet=request.Studimet
                };

                _context.Profesoret.Add(profesoret);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}