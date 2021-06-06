using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Delete
    {
         public class Command : IRequest
        {
            public Guid Id { get; set; }

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
                
                var njoftimet=await _context.Njoftimet.FindAsync(request.Id);

                if(njoftimet==null)throw new Exception("Error edit");

                _context.Remove(njoftimet);

                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                
                throw new System.Exception("Error");
            }
        }
    }
}