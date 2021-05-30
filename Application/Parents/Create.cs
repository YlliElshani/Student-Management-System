using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Parents
{
    public class Create
    {
        public class Command : IRequest
        {

            public int nrKidsEnrolled {get; set;}

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
                var parents=new Parent{
                    nrKidsEnrolled=request.nrKidsEnrolled
                };

                _context.Parents.Add(parents);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}