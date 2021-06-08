using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.KerkesaPrezantimi
{
    public class Edit
    {
        public class Command : IRequest
        {
        public Guid Id {get; set;}
        public string prezantimiInfo {get; set;}
        public int? koheZgjatjaPerafert {get; set;}
        public DateTime? dataCaktuar {get; set;}
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
                var kerkesa = await _context.KerkesaP.FindAsync(request.Id);

                if(kerkesa == null)
                    throw new Exception ("Could not find user");

                kerkesa.prezantimiInfo = request.prezantimiInfo ?? kerkesa.prezantimiInfo;
                kerkesa.koheZgjatjaPerafert = request.koheZgjatjaPerafert ?? kerkesa.koheZgjatjaPerafert;
                kerkesa.dataCaktuar = request.dataCaktuar ?? kerkesa.dataCaktuar;
                

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}