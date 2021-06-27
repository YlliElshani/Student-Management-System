using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    
    public class ProfesorController : BaseController
    {
        /*[AllowAnonymous]
        [HttpPost("login")]

        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }*/

        [Authorize(Roles.Profesor)]
        [HttpPost("loginProfesor")]
        public async Task<ActionResult<User>> LoginProfesor(LoginProfesor.Query query)
        {
            return await Mediator.Send(query);
        }

        [AllowAnonymous]
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
    }
}