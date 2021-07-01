using System;
using Microsoft.AspNetCore.Identity;
using System.Linq;

namespace Domain
{
    public class AppRole : IdentityRole
    {
        public string Descripion { get; set; }
    }
}