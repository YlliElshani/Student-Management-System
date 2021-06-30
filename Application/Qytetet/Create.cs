using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Qytetet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Emri { get; set; }

            public string Shteti { get; set; }
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
                var qyteti = new Qyteti
                {
                    Id=request.Id,
                    Emri=request.Emri,
                    Shteti=request.Shteti
                };

                _context.Qytetet.Add(qyteti);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}