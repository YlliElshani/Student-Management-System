using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Notat
{
    public class ListNotat
    {
        public class Query : IRequest<List<Nota>> { }


        public class Handler : IRequestHandler<Query, List<Nota>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Nota>> Handle(Query request, CancellationToken cancellationToken)
            {
                var notat= await _context.Notat.ToListAsync();

                return notat;
            }
        }
    }
}