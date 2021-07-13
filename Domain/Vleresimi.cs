using System;
using System.Collections.Generic;

namespace Domain
{
    public class Vleresimi
    {
        public Guid VleresimiId { get; set; }
        public string Sudenti {get; set;}
        public string Lenda { get; set; }
        public int Nota { get; set; }
        public string DataEVendosjes {get; set;}
        public string OraEVendosjes {get; set;}
    }
}