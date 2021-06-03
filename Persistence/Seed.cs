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
                var students = new List<Student>
                {
                    new Student
                    {
                        FirstName = "Albiona",
                        LastName = "Berisha",
                        Gender = "F",
                        Age = 20,
                        PhoneNumber = "049123456",
                        Email = "albiona.berisha@gmail.com",
                        Address = "Rexhep Osmani",
                        Password = "albionae123",
                        City = "Rahovec",
                        Role = "Student",
                        YearOfStudy = 2019,
                        FieldOfStudy = "Natural Sciences",
                        Grade = "11/11"
                    },
                    new Student
                    {
                        FirstName = "Era",
                        LastName = "Hasimja",
                        Gender = "F",
                        Age = 19,
                        PhoneNumber = "048456789",
                        Email = "erahasimja@gmail.com",
                        Address = "Melihate Rama",
                        Password = "era123",
                        City = "Gjakove",
                        Role = "Student",
                        YearOfStudy = 2018,
                        FieldOfStudy = "Social Sciences",
                        Grade = "12/9"
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

                var parents = new List<Parent>{
                    new Parent{
                        FirstName = "Endrit",
                        LastName = "Makolli",
                        Gender = "M",
                        Age = 20,
                        PhoneNumber = "0476454637",
                        Email = "EndritMakolli5@gmail.com",
                        Address = "Rr.Vellezrit Gervalla nr.53",
                        Password = "Makolli444",
                        City = "Prishtine",
                        Role = "Parent",
                        nrKidsEnrolled=3
                    }   
                 
                };

                var profesoret = new List<Profesor>{
                    new Profesor{
                        FirstName = "Gentrit",
                        LastName = "Ulluri",
                        Gender = "M",
                        Age = 30,
                        PhoneNumber = "0472154621",
                        Email = "GentritUlluri@gmail.com",
                        Address = "Rr.Vellezrit Gervalla nr.53",
                        Password = "Ulluri555",
                        City = "Malishev",
                        Role = "Profesor",
                        GradaAkademike ="Profesor i rregullt",
                        Studimet = "Master"
                    }   
                 
                };
                var detyrat = new List<Detyra>
                {
                    new Detyra
                    {
                        DetyraEmri = "Projekt",
                        Pershkrimi = "Pershkrimi",
                        
                    }
                };
              

                var arsyetimet=new List<Arsyetim>{
                    new Arsyetim{
                        ArsyejaMungeses="Nxenesi eshte semur",
                        nrDiteve=4
                    }
                };

                context.Users.AddRange(users);
                context.SaveChanges();

                context.Students.AddRange(students);
                context.SaveChanges();

                context.Admins.AddRange(admins);
                context.SaveChanges();

                context.Parents.AddRange(parents);
                context.SaveChanges();

                context.Profesoret.AddRange(profesoret);
                context.SaveChanges();

                context.Arsyet.AddRange(arsyetimet);
                context.SaveChanges();

                context.Detyrat.AddRange(detyrat);
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

            if(!context.Trips.Any())
            {
                var trips = new List<Trip>
                {
                    new Trip
                    {
                        name = "Vizitë në qytetin e Shkodrës",
                        place = "Shkodër",
                        date = "25 Qershor 2021",
                        description = "Ekskursioni është një ditor dhe organizohet pas përfundimit të semestrit për të gjithë nxënësit që duan të argëtohen dhe të vizitojnë qytetin e Shkodrës",
                        participants = "Vetëm nxënësit e vitit të tretë",
                        price = "Pagesat i mbulon shkolla"

                    }
                };

                context.Trips.AddRange(trips);
                context.SaveChanges();
            }

            if(!context.Notat.Any())
            {
                var notat = new List<Nota>
                {
                    new Nota
                    {
                        Lenda = "Gjuhe shqipe",
                        Grade = 5
                    },
                    new Nota
                    {
                        Lenda = "Matematike",
                        Grade = 3
                        
                    }
                };
                context.Notat.AddRange(notat);
                context.SaveChanges();
            }

            
        }

    }
}