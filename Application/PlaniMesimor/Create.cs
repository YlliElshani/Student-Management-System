using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.PlaniMes
{
    public class Create
    {
        public class Command : IRequest
        {

          public int Id{get; set;}

        public string planiInfo{get; set;}

        public string kriteriSuksesit{get; set;}

        public DateTime dataShenimit{get; set;}

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
                var planiM=new PlaniMesimor{
                    planiInfo=request.planiInfo,
                    kriteriSuksesit=request.kriteriSuksesit,
                    dataShenimit=request.dataShenimit,
                };

                _context.PlaniMesimor.Add(planiM);


                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}