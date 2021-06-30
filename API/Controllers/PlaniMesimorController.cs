using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Application.PlaniMes;

namespace API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController] 

    public class PlaniMesimorController : ControllerBase
    {
        private readonly IMediator _mediator;
        public PlaniMesimorController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<PlaniMesimor>>> List(){
            return await _mediator.Send(new ListPlanetM.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<PlaniMesimor>> Details(int id){
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command){
            return await _mediator.Send(command);
        }

        [HttpPut("{Id}")]

        public async Task<ActionResult<Unit>> Edit(int id,Edit.Command command){
            command.Id=id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{Id}")]

        public async Task<ActionResult<Unit>> Delete(int id){
            return await _mediator.Send(new Delete.Command{Id=id});
        }
    }
}