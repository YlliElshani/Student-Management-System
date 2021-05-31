using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Profesoret;
using System;

namespace API.Controllers
{
    public class ProfesoretController :  ControllerBase
    {
        private readonly IMediator _mediator;

        public ProfesoretController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Profesor>>> List()
        {
            return await _mediator.Send(new ListProfesoret.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Profesor>> Details (Guid id)
        {
            return await _mediator.Send(new Details.Query{UserId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.UserId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{UserId = id});
        }
    }
}