using System;
using System.Collections.Generic;

namespace Domain
{
    public class Lenda
    {
        public Guid LendaId { get; set; }
        public string Emri { get; set; }
        public string Klasa { get; set; }
        public string Profesori {get; set; }
        public string Descripion { get; set; }
        public List<PlaniLenda> Plani_Lenda{get; set;}
    }
}