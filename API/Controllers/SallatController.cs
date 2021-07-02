using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Sallat;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class SallatController : ControllerBase
    {
        private readonly IMediator _mediator;

        public SallatController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Salla>>> List()
        {
            return await _mediator.Send(new ListSallat.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Salla>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{SallaId = id});
        }
        
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.SallaId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{SallaId = id});
        }
    }
}