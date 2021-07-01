using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Vleresimet;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class VleresimetController : ControllerBase
    {
        private readonly IMediator _mediator;

        public VleresimetController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Vleresimi>>> List()
        {
            return await _mediator.Send(new ListVleresimet.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vleresimi>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{VleresimiId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.VleresimiId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{VleresimiId = id});
        }
    }
}