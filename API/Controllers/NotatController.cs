using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Notat;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class NotatController : ControllerBase
    {
        private readonly IMediator _mediator;

        public NotatController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Nota>>> List()
        {
            return await _mediator.Send(new ListNotat.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Nota>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{NotaId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.NotaId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{NotaId = id});
        }
    }
}