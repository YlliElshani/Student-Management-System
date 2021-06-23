using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Prezantimet
{
    public class Details
    {
        public class Query : IRequest <Prezantimi>
        {
            public Guid prezantimiId {get; set;}
        }

        public class Handler : IRequestHandler<Query, Prezantimi>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Prezantimi> Handle(Query request, CancellationToken cancellationToken)
            {
                var prezantimi = await _context.Prezantimet.FindAsync(request.prezantimiId);

                return prezantimi;
            }
        }
    }
}