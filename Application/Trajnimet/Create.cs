using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Trajnimet
{
    public class Create
    { 
        public class Command : IRequest
        {

        public Guid TrajnimId { get; set; } 

        public string TrajnimEmri{get; set;}
        public string Pershkrimi{get; set;}

        public int numriDiteve{get; set;}
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
                var trajnimet=new Trajnim{
                    TrajnimEmri=request.TrajnimEmri,
                    Pershkrimi=request.Pershkrimi,
                    numriDiteve=request.numriDiteve
                };

                _context.Trajnimet.Add(trajnimet);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}