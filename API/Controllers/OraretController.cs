using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Oraret;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class OraretController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OraretController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Orari>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Orari>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{OrariId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.OrariId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{OrariId = id});
        }
    }
}