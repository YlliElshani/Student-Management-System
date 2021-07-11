using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using Application.Errors;
using System.Net;

namespace Application.Provimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id {get; set;}
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
                var provimi = await _context.Provimet.FindAsync(request.Id);

                if(provimi == null)
                    throw new RestException(HttpStatusCode.NotFound, new {provimi = "Not Found"});

                _context.Remove(provimi);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}