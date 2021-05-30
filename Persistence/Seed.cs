using System.Linq;
using Domain;
using System.Collections.Generic;

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
                context.Users.AddRange(users);
                context.SaveChanges();
            }

            if(!context.Lendet.Any())
            {
                var lendet = new List<Lenda>
                {
                    new Lenda
                    {
                        Emri = "Matematike", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    },
                    new Lenda
                    {
                        Emri = "Matematike", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    }
                };
                context.Lendet.AddRange(lendet);
                context.SaveChanges();
            }
        }
    }
}