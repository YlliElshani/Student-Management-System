using System.Threading.Tasks;
using Application.User;
using Application.Student;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;


namespace API.Controllers
{
    
    public class StudentController : BaseController
    {
        /*[AllowAnonymous]
        [HttpPost("login")]

        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }*/

        [AllowAnonymous]
        //[Authorize(Roles.Student)]
        [HttpPost("loginStudent")]
        public async Task<ActionResult<User>> LoginStudent(LoginStudent.Query query)
        {
            return await Mediator.Send(query);
        }

        [AllowAnonymous]
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

        [AllowAnonymous]
        [HttpGet("list")]
        public async Task<ActionResult<List<AppUser>>> StudentList()
        {
            return await Mediator.Send(new StudentList.Query());
        }
    }
}