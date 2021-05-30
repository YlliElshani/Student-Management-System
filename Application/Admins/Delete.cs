using System;
using System.Threading;
using System.Threading.Tasks;
using Domain.obj;
using MediatR;
using Persistence;

namespace Application.Admins
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
                
                var admins=await _context.Admins.FindAsync(request.UserId);

                if(admins==null)throw new Exception("Error edit");

                _context.Remove(admins);

                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                
                throw new System.Exception("Error");
            }
        }
    }
}