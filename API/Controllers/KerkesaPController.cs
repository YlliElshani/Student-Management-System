using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.KerkesaPrezantimi;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 

    public class KerkesaPController : ControllerBase
    {
        private readonly IMediator _mediator;
        public KerkesaPController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<KerkesaPrezantimit>>> List(){
            return await _mediator.Send(new ListoKerkesatP.Query());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<KerkesaPrezantimit>> Details(Guid id){
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command){
            return await _mediator.Send(command);
        }

        [HttpPut("{Id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id,Edit.Command command){
            command.Id=id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{Id}")]

        public async Task<ActionResult<Unit>> Delete(Guid id){
            return await _mediator.Send(new Delete.Command{Id=id});
        }
    }
}