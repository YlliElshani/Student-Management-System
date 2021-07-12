using System;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Collections.Generic;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName {get; set;}

        public string Age {get; set;}

        public string City {get; set;}

        public string Address {get; set;}

        public string ZipCode {get; set;}

        public string PhoneNumber {get; set;}

        public virtual ICollection<ProfessorMaterial> ProfessorMaterials { get; set; }
    }
}
