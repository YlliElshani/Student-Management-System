using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Prezantimet
{
    public class Edit
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
                var prezantimi = await _context.Prezantimet.FindAsync(request.prezantimiId);

                if (prezantimi == null)
                    throw new Exception("Could not find subject");
                    
                prezantimi.prezantimiInfo = request.prezantimiInfo ?? prezantimi.prezantimiInfo;
                prezantimi.kohezgjatja = request.kohezgjatja ?? prezantimi.kohezgjatja;
                prezantimi.lenda = request.lenda ?? prezantimi.lenda;
                prezantimi.profesori = request.profesori ?? prezantimi.profesori;
                prezantimi.salla = request.salla ?? prezantimi.salla;
                prezantimi.data= request.data ?? prezantimi.data;
                prezantimi.ora = request.ora ?? prezantimi.ora;
               
                

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}