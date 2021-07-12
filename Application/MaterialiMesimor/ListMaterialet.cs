using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;

namespace Application.MaterialiMesimor
{
    public class ListMaterialet
    {
        public class Query : IRequest<List<MaterialiDto>> {}

        public class Handler : IRequestHandler<Query, List<MaterialiDto>>
        {
            private readonly DataContext _context;
        
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<MaterialiDto>> Handle (Query request, CancellationToken cancellationToken)
            {
                var materialet = await _context.Materialet.ToListAsync();

                return _mapper.Map<List<Materiali>, List<MaterialiDto>>(materialet);
            }
        }
    }
}