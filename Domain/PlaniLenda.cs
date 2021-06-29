using System;

namespace Domain
{
    public class PlaniLenda
    {
        public int idP{get; set;}

        public int Id{get; set;}

        public PlaniMesimor planiMesimor{get; set;}

        public Guid LendaId{get; set;}

        public Lenda Lenda{get; set;}
    }
}