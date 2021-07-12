using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using System;

namespace Application.KerkesaNdihme
{
    public class Edit
    {
        public class Command : IRequest
        {
        public Guid Id {get; set;}
        public string kerkesaInfo {get; set;}

        public string emri { get; set; }

        public string displayName {get; set;}
        public DateTime? dataECaktuar {get; set;}
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
                var kerkesa = await _context.KerkesaN.FindAsync(request.Id);

                if(kerkesa == null)
                    throw new Exception ("Could not find user");

                kerkesa.kerkesaInfo = request.kerkesaInfo ?? kerkesa.kerkesaInfo;
                kerkesa.emri = request.emri ?? kerkesa.emri;
                kerkesa.displayName = request.displayName ?? kerkesa.displayName;
                kerkesa.dataECaktuar = request.dataECaktuar ?? kerkesa.dataECaktuar;
                

                var success = await _context.SaveChangesAsync() > 0;
        
                if(success) return Unit.Value;
        
                throw new Exception ("Problem saving changes");
            }
        }
    }
}