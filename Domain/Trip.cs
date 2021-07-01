using System; 

namespace Domain
{
    public class Trip
    {
        public Guid tripId {get; set;}
        
        public string name {get; set;}

        public string place {get; set;}

        public string date {get; set;}

        public string description {get; set;}

        public string participants {get; set;}

        public string price {get; set;}

        public string user {get; set;}

    }
}