using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Arsyetimet;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController] 

    public class ArsyejaController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ArsyejaController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Arsyetim>>> List(){
            return await _mediator.Send(new ListaArsyetimeve.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Arsyetim>> Details(Guid id){
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command){
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<Unit>> Edit(Guid id,Edit.Command command){
            command.Id=id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<Unit>> Delete(Guid id){
            return await _mediator.Send(new Delete.Command{Id=id});
        }
    }
}