using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.EvidencatEPrinderve
{
    public class Create
    {
        public class Command : IRequest
        {

            public string evidencaInfo{get; set;}

            public string displayName {get; set;}

            public string displayName2 {get; set;}

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
                var evidenca=new EvidencaPrindeve{
                    evidencaInfo=request.evidencaInfo,
                    displayName=request.displayName,
                    displayName2=request.displayName2
                };

                _context.Evidencat.Add(evidenca);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}