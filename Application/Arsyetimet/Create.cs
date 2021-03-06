using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Arsyetimet
{
    public class Create
    { 
        public class Command : IRequest
        {

        public Guid Id { get; set; } 

        public string ArsyejaMungeses{get; set;}

        public int nrDiteve{get; set;}
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
                var arsyeja=new Arsyetim{
                    ArsyejaMungeses=request.ArsyejaMungeses,
                    nrDiteve=request.nrDiteve
                };

                _context.Arsyet.Add(arsyeja);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}