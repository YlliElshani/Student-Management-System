using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Profesoret
{
    public class Delete
    {
         public class Command : IRequest
        {
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

                if(profesoret==null)throw new Exception("Error edit");

                _context.Remove(profesoret);

                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                
                throw new System.Exception("Error");
            }
        }
    }
}