using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Paraleleet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid ParaleljaaId { get; set; }
            public string EmriPar { get; set; }
            
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
                var paraleljaa = new Paraleljaa
                {
                    ParaleljaaId=request.ParaleljaaId,
                    EmriPar=request.EmriPar, 
                };

                _context.Paraleleet.Add(paraleljaa);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}