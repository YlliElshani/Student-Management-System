using System.Linq;
using Domain;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData (DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Hysnije",
                        UserName = "Hysi",
                        Email = "hysi@gmail.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Altina",
                        UserName = "Tina",
                        Email = "tina@gmail.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Albiona",
                        UserName = "Biona",
                        Email = "biona@gmail.com"
                    }
                };
                foreach (var user in users)
                {
                   await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if(!context.Detyrat.Any())
            {
                var detyrat = new List<Detyra>
                {
                    new Detyra
                    {
                        DetyraEmri = "Projekt",
                        Pershkrimi = "Pershkrimi",
                        
                    }
                };
                context.Detyrat.AddRange(detyrat);
                context.SaveChanges();
            };

            if(!context.Arsyet.Any())
            {
                var arsyetimet=new List<Arsyetim>{
                    new Arsyetim{
                        ArsyejaMungeses="Nxenesi eshte semur",
                        nrDiteve=4
                    }
                };
                context.Arsyet.AddRange(arsyetimet);
                context.SaveChanges();
            };

            if(!context.Trajnimet.Any())
            {
                var trajnimet = new List<Trajnim>
                {
                    new Trajnim
                    {
                        TrajnimEmri = "HTML/CSS",
                        Pershkrimi = "Front-End Learning",
                        numriDiteve = 20
                        
                    }
                };
                context.Trajnimet.AddRange(trajnimet);
                context.SaveChanges();
            };

            if(!context.Njoftimet.Any())
            {
                var njoftimet=new List<Njoftime>{
                    new Njoftime{
                        Njoftimi="Do te kete pushim ne kete date per shkak te festes se 1 qeshorit",
                        DataENjoftimit=DateTime.Now
                    }
                };
                context.Njoftimet.AddRange(njoftimet);
                context.SaveChanges();
            };

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
            };

            if(!context.Trips.Any())
            {
                var trips = new List<Trip>
                {
                    new Trip
                    {
                        name = "Vizitë në qytetin e Shkodrës",
                        place = "Shkodër",
                        date = "2021-06-30",
                        description = "Ekskursioni është një ditor dhe organizohet pas përfundimit të semestrit për të gjithë nxënësit që duan të argëtohen dhe të vizitojnë qytetin e Shkodrës",
                        participants = "Vetëm nxënësit e vitit të tretë",
                        price = "Pagesat i mbulon shkolla"

                    }
                };

                context.Trips.AddRange(trips);
                context.SaveChanges();
            };

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
            };

            if(!context.Competitions.Any())
            {
                var competitions = new List<Competition>
                {
                    new Competition
                    {
                        name = "Math Genius",
                        date = "21 korrik 2021",
                        description = "Gara organizohet ne kuader te shkolles dhe brenda kornizave te saj",
                        field = "Matematikë",
                        awards = "Certifikatë"
                    }
                };
                context.Competitions.AddRange(competitions);
                context.SaveChanges();
            };

            if(!context.Paralelet.Any())
            {
                var paralelet = new List<Paralelja>
                {
                    new Paralelja
                    {
                        Klasa = "X", 
                        Paralele= "1",
                        Kujdestari="Filan Fisteku", 
                        NrNxenesve=30,
                        Gjenerata="19/20"
                        
                    },
                    new Paralelja
                    {
                        Klasa = "XI", 
                        Paralele= "2",
                        Kujdestari="Filane Fisteku", 
                        NrNxenesve=32,
                        Gjenerata="19/20"
                        
                    },
                 
                };
                context.Paralelet.AddRange(paralelet);
                context.SaveChanges();
            };

            if(!context.KerkesaN.Any())
            {
                var kerkesat = new List<KerkesaNdihmes>
                {
                    new KerkesaNdihmes
                    {
                        kerkesaInfo="Kam nevoje per ndihm rreth numrave kompleks",
                        dataECaktuar=DateTime.Now
                    }
                };
                context.KerkesaN.AddRange(kerkesat);
                context.SaveChanges();
            };

            if(!context.Eventet.Any())
            {
                var evente = new List<Evente>
                {
                    new Evente
                    {
                        infoEvent="Do te festohet 28 Nëntori ne shkolle me kercime tradicionale",
                        dataEEventit=DateTime.Now,
                        kategoria="Feste",
                        vendiMbajtjes="Ne sallën kryesore"
                    }
                };
                context.Eventet.AddRange(evente);
                context.SaveChanges();
            };

            if(!context.Prezantimet.Any())
            {
                var prezantimet = new List<Prezantimi>
                {
                    new Prezantimi
                    {
                        prezantimiInfo = "Kerkoj prezantim për projektin në lëndën e fizikës.",
                        kohezgjatja = "30 minuta",
                        data = "2021-07-17",
                        ora = "10:40"
                    }
                };

                context.Prezantimet.AddRange(prezantimet);
                context.SaveChanges();
            };
        }

    }
}