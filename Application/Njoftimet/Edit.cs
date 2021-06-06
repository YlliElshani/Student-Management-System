using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Edit
    {
    public class Command : IRequest
        {

            public Guid Id { get; set; }
            public string Njoftimi{get; set;}

            public DateTime? DataENjoftimit{get; set;}

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
                var njoftime=await _context.Njoftimet.FindAsync(request.Id);

                if(njoftime==null) throw new Exception("Error Ac");


                njoftime.Njoftimi=request.Njoftimi ?? njoftime.Njoftimi;

                njoftime.DataENjoftimit=request.DataENjoftimit ?? njoftime.DataENjoftimit;



                var success = await _context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new System.Exception("Error");
            }
        }
    }
}