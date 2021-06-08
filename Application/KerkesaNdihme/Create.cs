using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Domain;
using System;

namespace Application.KerkesaNdihme
{
    public class Create
    {
        public class Command : IRequest
        {
        public Guid Id {get; set;}
        public string kerkesaInfo {get; set;}
        public DateTime dataECaktuar {get; set;}
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
                var kerkesa = new KerkesaNdihmes
                {
                    Id=request.Id,
                    kerkesaInfo=request.kerkesaInfo,
                    dataECaktuar=request.dataECaktuar
                };

                _context.KerkesaN.Add(kerkesa);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception ("Problem saving changes");
            }
        }
    }
}
