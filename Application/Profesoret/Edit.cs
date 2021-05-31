using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Profesoret
{
    public class Edit
    {
        public class Command : IRequest
        {
            public string GradaAkademike {get; set;}

            public string Studimet {get; set;}
            public Guid UserId { get; set; }

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
                var profesoret=await _context.Profesoret.FindAsync(request.UserId);

                if(profesoret==null) throw new Exception("Error Ac");


                profesoret.GradaAkademike=request.GradaAkademike ?? profesoret.GradaAkademike;
                profesoret.Studimet=request.Studimet ?? profesoret.Studimet;


                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}