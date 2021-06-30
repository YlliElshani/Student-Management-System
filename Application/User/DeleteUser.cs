using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using Application.Errors;
using System.Net;

namespace Application.User
{
    public class DeleteUser
    {
        public class Command : IRequest
        {
            public string Id {get; set;}
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
                var user = await _context.AppUser.FindAsync(request.Id);

                if(user == null)
                    throw new RestException(HttpStatusCode.NotFound, new {user = "Not Found"});

                _context.Remove(user);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}