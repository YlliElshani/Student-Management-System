using System;

namespace Domain
{
    public class KerkesaPrezantimit
    {
        public Guid Id{get; set;}

        public string prezantimiInfo{get; set;}

        public int koheZgjatjaPerafert {get; set;}

        public DateTime dataCaktuar{get; set;}
    }
}