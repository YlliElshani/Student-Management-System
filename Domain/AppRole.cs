using System;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppRole : IdentityRole
    {
        public string Descripion { get; set; }
    }
}