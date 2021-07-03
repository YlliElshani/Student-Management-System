using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using Application.Errors;
using System.Net;

namespace Application.MaterialiMesimor
{
    public class DeleteMateriali
    {
        public class Command : IRequest
        {
            public Guid  id {get; set;}
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

                _context.Remove(materiali);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}