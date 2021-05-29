using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.Users
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid UserId {get; set;}

            public string FirstName {get; set;}

            public string LastName {get; set;}

            public string Gender {get; set;}

            public int Age {get; set;}

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
                var user = new User
                {
                    UserId = request.UserId,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Gender = request.Gender,
                    Age = request.Age,
                    PhoneNumber = request.PhoneNumber,
                    Email = request.Email,
                    Address = request.Address,
                    Password = request.Password,
                    City = request.City,
                    Role = request.Role
                };

                _context.Users.Add(user);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
