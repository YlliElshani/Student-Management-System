using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Create
    {
        public class Command : IRequest
        {

            public string Njoftimi{get; set;}

            public DateTime DataENjoftimit{get; set;}

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
                var njoftime=new Njoftime{
                    Njoftimi=request.Njoftimi,
                    DataENjoftimit=request.DataENjoftimit
                };

                _context.Njoftimet.Add(njoftime);
                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}