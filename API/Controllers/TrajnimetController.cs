using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Trajnimet;
using System; 
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]

    public class TrajnimetController :  ControllerBase
    {
        private readonly IMediator _mediator;

        public TrajnimetController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Trajnim>>> List()
        {
            return await _mediator.Send(new ListTrajnimet.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Trajnim>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{TrajnimId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.TrajnimId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{TrajnimId = id});
        }
    }
}