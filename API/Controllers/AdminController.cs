using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Admins;
using Domain.obj;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AdminController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Admin>>> List(){
            return await _mediator.Send(new ListAdmins.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> Details(Guid id){
            return await _mediator.Send(new Details.Query{UserId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>>Create(Create.Command command){
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<Unit>> Edit(Guid id,Edit.Command command){
            command.UserId=id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]

        public async Task <ActionResult<Unit>>Delete(Guid id){
            return await _mediator.Send(new Delete.Command{UserId=id});
        }
    }
}