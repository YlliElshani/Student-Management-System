using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Detyrat;
using System; 
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]

    public class DetyratController :  ControllerBase
    {
        private readonly IMediator _mediator;

        public DetyratController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Detyra>>> List()
        {
            return await _mediator.Send(new ListDetyrat.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Detyra>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{DetyraId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }
        
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.DetyraId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{DetyraId = id});
        }
    }
}