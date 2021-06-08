using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.KerkesaPrezantimi
{
    public class Create
    {
        public class Command : IRequest
        {
        public Guid Id {get; set;}
        public string prezantimiInfo {get; set;}

        public int koheZgjatjaPerafert{get; set;}
        public DateTime dataCaktuar {get; set;}
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
                var kerkesa = new KerkesaPrezantimit
                {
                    Id=request.Id,
                    prezantimiInfo=request.prezantimiInfo,
                    koheZgjatjaPerafert=request.koheZgjatjaPerafert,
                    dataCaktuar=request.dataCaktuar
                };

                _context.KerkesaP.Add(kerkesa);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
