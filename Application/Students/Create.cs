using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.Students
{
    public class Create
    {
         public class Command : IRequest
        {
            public int YearOfStudy {get; set;}

            public string FieldOfStudy {get; set;}

            public string Grade {get; set;}
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
                var student = new Student
                {
                    YearOfStudy = request.YearOfStudy,
                    FieldOfStudy = request.FieldOfStudy,
                    Grade = request.Grade
                };

                _context.Students.Add(student);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}