using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;
using FluentValidation;
using Application.Errors;
using System.Net;
using Domain;

namespace Application.User
{
    public class Edit
    {
        public class Command : IRequest
        {
            public string Id {get; set;}

            public string DisplayName { get; set; }

            public string Username { get; set; }

            public string Image { get; set; }

            public string Email {get; set;}

            public string Age {get; set;}

            public string City {get; set;}

            public string Address {get; set;}

            public string ZipCode {get; set;}

            public string PhoneNumber {get; set;}
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator () 
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Age).NotEmpty();
                RuleFor(x => x.City).NotEmpty();
                RuleFor(x => x.Address).NotEmpty();
                RuleFor(x => x.ZipCode).NotEmpty();
                RuleFor(x => x.PhoneNumber).NotEmpty();
            }
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

               user.DisplayName = request.DisplayName ?? user.DisplayName;
               

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}