using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    
    public class GuardianController : BaseController
    {
        /*[AllowAnonymous]
        [HttpPost("login")]

        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }*/
        [AllowAnonymous]
        //[Authorize(Roles.Guardian)]
        [HttpPost("loginGuardian")]
        public async Task<ActionResult<User>> LoginGuardian(LoginGuardian.Query query)
        {
            return await Mediator.Send(query);
        }

        [AllowAnonymous]
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
    }
}