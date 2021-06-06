using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Competitions;
using System; 

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CompetitionController :  ControllerBase
    {
        private readonly IMediator _mediator;

        public CompetitionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Competition>>> List()
        {
            return await _mediator.Send(new ListCompetitions.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Competition>> Details (Guid id)
        {
            return await _mediator.Send(new CompetitionDetails.Query{competitionId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateCompetition.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditCompetition.Command command)
        {
            command.competitionId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new DeleteCompetition.Command{competitionId = id});
        }
    }
}