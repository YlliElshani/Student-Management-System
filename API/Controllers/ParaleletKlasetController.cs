using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ParaleletKlaset;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class ParaleletKlasetController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ParaleletKlasetController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<ParaleljaKlasa>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ParaleljaKlasa>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{ParaleljaKlasaId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.ParaleljaKlasaId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{ParaleljaKlasaId = id});
        }
    }
}