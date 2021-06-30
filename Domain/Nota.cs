using System;
using System.Collections.Generic;

namespace Domain
{
    public class Nota
    {
        public Guid NotaId { get; set; }
        public string Lenda { get; set; }
        public int Grade { get; set; }
    }
}