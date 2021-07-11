using System.Threading.Tasks;
using Application.User;
using Domain;
using Application.Professor;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System;
using MediatR;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ProfesorController : BaseController
    {
        //[Authorize(Roles.Profesor)]
        [HttpPost("loginProfesor")]
        public async Task<ActionResult<User>> LoginProfesor(LoginProfesor.Query query)
        {
            return await Mediator.Send(query);
        }

        [HttpPost("registerProfesor")]
        public async Task<ActionResult<User>> RegisterProfesor(RegisterProfesor.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<User>> CurrentUser()
        {
            return await Mediator.Send(new CurrentUser.Query());
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<AppUser>>> ProfesorsList()
        {
            return await Mediator.Send(new ProfesorsList.Query());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteUser(string id){
            return await Mediator.Send(new DeleteUser.Command{Id = id});
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(string id, Edit.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }
    }
}