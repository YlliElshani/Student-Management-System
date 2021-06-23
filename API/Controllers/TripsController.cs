using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Trips;
using System; 

namespace API.Controllers
{

    public class TripsController :  BaseController
    {

        [HttpGet]
        public async Task<ActionResult<List<Trip>>> List()
        {
            return await Mediator.Send(new ListTrips.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Trip>> Details (Guid id)
        {
            return await Mediator.Send(new TripDetails.Query{tripId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateTrip.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditTrips.Command command)
        {
            command.tripId = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Mediator.Send(new DeleteTrips.Command{tripId = id});
        }
    }
}