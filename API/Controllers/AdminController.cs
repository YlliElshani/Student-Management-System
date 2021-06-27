using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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

        [HttpPost("loginAdmin")]
        [Authorize(Roles.Admin)]
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
    }
}