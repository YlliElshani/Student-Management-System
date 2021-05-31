using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.Students
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int? YearOfStudy {get; set;}

            public string FieldOfStudy {get; set;}

            public string Grade {get; set;}

            public Guid UserId {get; set;}
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
                var student = await _context.Students.FindAsync(request.UserId);

                if(student == null)
                    throw new Exception ("Could not find student");
                        
                student.YearOfStudy = request.YearOfStudy ?? student.YearOfStudy;
                student.FieldOfStudy = request.FieldOfStudy ?? student.FieldOfStudy;
                student.Grade = request.Grade ?? student.Grade;

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}