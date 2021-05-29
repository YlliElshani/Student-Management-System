using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Users
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid UserId {get; set;}

            public string FirstName {get; set;}

            public string LastName {get; set;}

            public string Gender {get; set;}

            public int? Age {get; set;}

            public string PhoneNumber {get; set;}

            public string Email {get; set;}

            public string Address {get; set;}

            public string Password {get; set;}

            public string City {get; set;}

            public string Role {get; set;}
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
                var user = await _context.Users.FindAsync(request.UserId);

                if(user == null)
                    throw new Exception ("Could not find user");

                user.FirstName = request.FirstName ?? user.FirstName;
                user.LastName = request.LastName ?? user.LastName;
                user.Gender = request.Gender ?? user.Gender;
                user.Age = request.Age ?? user.Age;
                user.PhoneNumber = request.PhoneNumber ?? user.PhoneNumber;
                user.Email = request.Email ?? user.Email;
                user.Address = request.Address ?? user.Address;
                user.Password = request.Password ?? user.Password;
                user.City = request.City ?? user.City;
                user.Role = request.Role ?? user.Role;    

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}