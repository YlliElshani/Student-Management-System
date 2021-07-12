using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Application.MaterialiMesimor
{
    public class MaterialiDto
    {
        public Guid id {get; set;}

        public string Titulli {get; set;}

        public string Pershkrimi {get; set;}

        public string Lenda {get; set;}

        public string Perioda {get; set;}

        public string FileDrop {get; set;}

        [JsonProperty("professorMaterials")]
        public ICollection<ProfessorDto> ProfessorMaterials { get; set; }
    }
}