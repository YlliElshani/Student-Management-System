using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Competitions;
using System;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{

    public class CompetitionController :  BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Competition>>> List()
        {
            return await Mediator.Send(new ListCompetitions.Query());
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Competition>> Details (Guid id)
        {
            return await Mediator.Send(new CompetitionDetails.Query{competitionId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateCompetition.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditCompetition.Command command)
        {
            command.competitionId = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Mediator.Send(new DeleteCompetition.Command{competitionId = id});
        }
    }
}