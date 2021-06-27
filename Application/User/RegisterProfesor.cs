using MediatR;
using Persistence;
using System.Threading.Tasks;
using System.Threading;
using System;
using FluentValidation;
using Domain;
using Microsoft.AspNetCore.Identity;
using Application.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Application.Errors;
using System.Net;
using Application.Validators;

namespace Application.User
{
    public class RegisterProfesor
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }

            public string UserName { get; set; }

            public string Email { get; set; }

            public string Image {get; set;}

            public string Age {get; set;}

            public string City {get; set;}

            public string Address {get; set;}

            public string ZipCode {get; set;}

            public string PhoneNumber {get; set;}

            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.UserName).NotEmpty();
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.Image).NotEmpty();
                RuleFor(x => x.Age).NotEmpty();
                RuleFor(x => x.City).NotEmpty();
                RuleFor(x => x.Address).NotEmpty();
                RuleFor(x => x.ZipCode).NotEmpty();
                RuleFor(x => x.PhoneNumber).NotEmpty();
                RuleFor(x => x.Password).Password();
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly DataContext _context;
            
            private readonly UserManager<AppUser> _userManager;
        
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.Where(x => x.Email == request.Email).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new {Email = "Email already exists"});

                if (await _context.Users.Where(x => x.UserName == request.UserName).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new{UserName = "Username already exists"});


                var user = new AppUser
                {
                    DisplayName = request.DisplayName,
                    Email = request.Email,
                    UserName = request.UserName
                };


                var result = await _userManager.CreateAsync(user, request.Password);
                var roleAdd = await _userManager.AddToRoleAsync(user, Roles.Profesor);

                if(result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        Username = user.UserName,
                        Image = null,
                        Email = user.Email,
                        Age = user.Age,
                        City = user.City,
                        Address = user.Address,
                        ZipCode = user.ZipCode,
                        PhoneNumber = user.PhoneNumber
                    };
                } 

                throw new Exception("Problem creating user");
            }
        }
    }
}