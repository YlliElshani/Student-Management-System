using System.Threading.Tasks;
using Application.User;
using Application.Guardian;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System;
using MediatR;

namespace API.Controllers
{
    [AllowAnonymous]
    public class GuardianController : BaseController
    {
        //[Authorize(Roles.Guardian)]
        [HttpPost("loginGuardian")]
        public async Task<ActionResult<User>> LoginGuardian(LoginGuardian.Query query)
        {
            return await Mediator.Send(query);
        }

        [HttpPost("registerGuardian")]
        public async Task<ActionResult<User>> RegisterGuardian(RegisterGuardian.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<User>> CurrentUser()
        {
            return await Mediator.Send(new CurrentUser.Query());
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<AppUser>>> GuardiansList()
        {
            return await Mediator.Send(new GuardiansList.Query());
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