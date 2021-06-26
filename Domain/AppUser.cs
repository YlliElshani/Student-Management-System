using System;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName {get; set;}

        public string Age {get; set;}

        public string City {get; set;}

        public string Address {get; set;}

        public string ZipCode {get; set;}
    }

}
