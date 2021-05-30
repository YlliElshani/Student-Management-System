using System.Threading;
using System.Threading.Tasks;
using Domain.obj;
using MediatR;
using Persistence;

namespace Application.Admins
{
    public class Create
    { 
        public class Command : IRequest
        {

            public string titulliZyrtar { get; set; } //Drejtor,Profesor etj

            public int viteEksperienc { get; set; }

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
                var admins=new Admin{
                    titulliZyrtar=request.titulliZyrtar,
                    viteEksperienc=request.viteEksperienc
                };

                _context.Admins.Add(admins);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}