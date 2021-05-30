using System.Linq;
using Domain;
using System.Collections.Generic;
using Domain.obj;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData (DataContext context)
        {
            if(!context.Users.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        FirstName = "Hysnije",
                        LastName = "Zllanoga",
                        Gender = "F",
                        Age = 20,
                        PhoneNumber = "047292237",
                        Email = "hysnijee.zllanoga@gmail.com",
                        Address = "Mizair Isma",
                        Password = "hysnije123",
                        City = "Rahovec",
                        Role = "Student"
                    },
                    new User
                    {
                        FirstName = "Altina",
                        LastName = "Hodaj",
                        Gender = "F",
                        Age = 20,
                        PhoneNumber = "047292237",
                        Email = "altinahodaj1@gmail.com",
                        Address = "Nene Tereza",
                        Password = "altina123",
                        City = "Mitrovice",
                        Role = "Student"
                    }
                };
                var admins = new List<Admin>{
                     new Admin{
                        FirstName = "Ylli",
                        LastName = "Elshani",
                        Gender = "M",
                        Age = 20,
                        PhoneNumber = "047294637",
                        Email = "ylliElshani5@gmail.com",
                        Address = "Rr.Vellezrit Gervalla nr.53",
                        Password = "Elshani444",
                        City = "Peje",
                        Role = "Admin",
                        titulliZyrtar="Drejtor",
                        viteEksperienc=5
                    }
                };

                context.Users.AddRange(users);
                context.SaveChanges();

                context.Admins.AddRange(admins);
                context.SaveChanges();

            }
        }

        //ktu
    }
}