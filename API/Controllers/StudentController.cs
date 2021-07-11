using System.Threading.Tasks;
using Application.User;
using Application.Student;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System;
using MediatR;

namespace API.Controllers
{
    [AllowAnonymous]   
    public class StudentController : BaseController
    {
        //[Authorize(Roles.Student)]
        [HttpPost("loginStudent")]
        public async Task<ActionResult<User>> LoginStudent(LoginStudent.Query query)
        {
            return await Mediator.Send(query);
        }

        [HttpPost("registerStudent")]
        public async Task<ActionResult<User>> RegisterStudent(RegisterStudent.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<User>> CurrentUser()
        {
            return await Mediator.Send(new CurrentUser.Query());
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<AppUser>>> StudentList()
        {
            return await Mediator.Send(new StudentList.Query());
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