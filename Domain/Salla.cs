using System;

namespace Domain
{
    public class Salla
    {
        public Guid SallaId {get; set;}
        public string Emri {get; set;}
        public int Kapaciteti {get; set;}
        public string Statusi {get; set;}
        public string DataRezervimit {get; set;}
        public string OraRezervimit {get; set;}
    }
}