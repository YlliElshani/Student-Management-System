using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Prezantimet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid prezantimiId {get; set;}

            public string prezantimiInfo {get; set;}
            public string lenda {get; set;}
            public string profesori {get; set;}
            public string salla {get; set;}

            public string kohezgjatja {get; set;}

            public string data {get; set;}

            public string ora {get; set;}
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
                var prezantimi = new Prezantimi
                {
                    prezantimiId=request.prezantimiId,
                    prezantimiInfo=request.prezantimiInfo,
                    lenda=request.lenda,
                    profesori=request.profesori,
                    salla=request.salla,
                    kohezgjatja=request.kohezgjatja,
                    data=request.data,
                    ora=request.ora
                };

                _context.Prezantimet.Add(prezantimi);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}