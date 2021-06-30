using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.PlaniMes
{
    public class Edit
    {
    public class Command : IRequest
        {

        public int Id{get; set;}

        public string planiInfo{get; set;}

        public string kriteriSuksesit{get; set;}

        public DateTime? dataShenimit{get; set;}


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
                var planiM=await _context.PlaniMesimor.FindAsync(request.Id);

                if(planiM==null) throw new Exception("Error Ac");

                    planiM.planiInfo=request.planiInfo ?? planiM.planiInfo;

                    planiM.kriteriSuksesit=request.kriteriSuksesit ?? planiM.kriteriSuksesit;

                    planiM.dataShenimit=request.dataShenimit ?? planiM.dataShenimit;

                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}