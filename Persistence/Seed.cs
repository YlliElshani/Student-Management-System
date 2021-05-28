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
                        role = "student"
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
                        role = "student"
                    }
                };
                context.Users.AddRange(users);
                context.SaveChanges();
            }
        }
    }
}