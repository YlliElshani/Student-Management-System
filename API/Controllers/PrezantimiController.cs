using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Prezantimet;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class PrezantimetController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PrezantimetController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Prezantimi>>> List()
        {
            return await _mediator.Send(new ListPrezantimet.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Prezantimi>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{prezantimiId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.prezantimiId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{prezantimiId = id});
        }
    }
}