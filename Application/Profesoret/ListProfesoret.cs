using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profesoret
{
    public class ListProfesoret
    {
        public class Query : IRequest<List<Profesor>> { }


        public class Handler : IRequestHandler<Query, List<Profesor>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<Profesor>> Handle(Query request, CancellationToken cancellationToken)
            {
                var profesoret= await _context.Profesoret.ToListAsync();

                return profesoret;
            }
        }
    }
}