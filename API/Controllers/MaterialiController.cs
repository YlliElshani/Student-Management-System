using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.MaterialiMesimor;
using System; 
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class MaterialiController :  BaseController
    {

        [HttpGet]
        public async Task<ActionResult<List<MaterialiDto>>> List()
        {
            return await Mediator.Send(new ListMaterialet.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateMateriali.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditMateriali.Command command)
        {
            command.id = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Mediator.Send(new DeleteMateriali.Command{id = id});
        }
    }
}