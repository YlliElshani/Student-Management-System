using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Trajnimet
{
    public class ListTrajnimet
    {
        public class Query : IRequest<List<Trajnim>> {}

        public class Handler : IRequestHandler<Query, List<Trajnim>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Trajnim>> Handle (Query request, CancellationToken cancellationToken)
            {
                var trajnimet = await _context.Trajnimet.ToListAsync();

                return trajnimet;
            }
        }
        
    }
}