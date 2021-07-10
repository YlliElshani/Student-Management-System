using System.Threading.Tasks;
using Application.Admin;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using Application.User;
using System;
using MediatR;

namespace API.Controllers
{
    
    public class AdminController : BaseController
    {
        /*[AllowAnonymous]
        [HttpPost("login")]

        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }*/

        [AllowAnonymous]
        [HttpPost("loginAdmin")]
        //[Authorize(Roles.Admin)]
        public async Task<ActionResult<User>> LoginAdmin(LoginAdmin.Query query)
        {
            return await Mediator.Send(query);
        }

        [AllowAnonymous]
        [HttpPost("registerAdmin")]
        public async Task<ActionResult<User>> RegisterAdmin(RegisterAdmin.Command command)
        {
            return await Mediator.Send(command);
        }
        
        [HttpGet]
        public async Task<ActionResult<User>> CurrentUser()
        {
            return await Mediator.Send(new CurrentUser.Query());
        }

        [AllowAnonymous]
        [HttpGet("list")]
        public async Task<ActionResult<List<AppUser>>> AdminsList()
        {
            return await Mediator.Send(new AdminsList.Query());
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteUser(string id){
            return await Mediator.Send(new DeleteUser.Command{Id = id});
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(string id, Edit.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }
    }
}