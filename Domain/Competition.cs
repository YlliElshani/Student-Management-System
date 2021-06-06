using System;

namespace Domain
{
    public class Competition
    {
        public Guid competitionId {get; set;}

        public string name {get; set;}

        public string date {get; set;}

        public string description {get; set;}

        public string field {get; set;}

        public string awards {get; set;}
    }
}