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
        public static async Task SeedData (DataContext context, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {

            var roleNames = new String[] { Roles.Admin, Roles.Student, Roles.Guardian, Roles.Profesor };

            foreach (var roleName in roleNames) {
                var role = await roleManager.RoleExistsAsync(roleName);
                if (!role) {
                    var result = await roleManager.CreateAsync(new AppRole { Name = roleName });
                }
            }

            if(!userManager.Users.Any())
            {
                var firstUser = new AppUser
                {
                    DisplayName = "Hysnije Zllanoga",
                    UserName = "Hysi",
                    Email = "hysi@gmail.com",
                    Age = "20",
                    City = "Rahovec",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(firstUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(firstUser, Roles.Student);

                var secondUser = new AppUser
                {
                    DisplayName = "Altina Hodaj",
                    UserName = "Tina",
                    Email = "tina@gmail.com",
                    Age = "20",
                    City = "Mitrovice",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(secondUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(secondUser, Roles.Admin);

                var thirdUser = new AppUser
                {
                    DisplayName = "Albiona Berisha",
                    UserName = "Biona",
                    Email = "biona@gmail.com",
                    Age = "20",
                    City = "Rahovec",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(thirdUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(thirdUser, Roles.Profesor);

                var fourthUser = new AppUser
                {
                    DisplayName = "Ylli Elshani",
                    UserName = "Ylli",
                    Email = "ylli@gmail.com",
                    Age = "20",
                    City = "Peje",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(fourthUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(fourthUser, Roles.Guardian);
            };
            

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
                        date = "21-07-2021",
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

            
            if(!context.Vijushmerit.Any())
                        {
                            var vijushmerit = new List<Vijushmeria>
                            {
                                new Vijushmeria
                                {
                                    Pjesmarrja = "80%", 
                                    Studenti= "Endrit Makolli"                  
                                }
                            
                            };
                            context.Vijushmerit.AddRange(vijushmerit);
                            context.SaveChanges();
                        };

                          if(!context.Kohezgjatjet.Any())
                        {
                            var kohezgjatjet = new List<Kohezgjatja>
                            {
                                new Kohezgjatja
                                {
                                    kohaMin = 45, 
                                    oraNisjes= 18                  
                                }
                            
                            };
                            context.Kohezgjatjet.AddRange(kohezgjatjet);
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

            if(!context.PlaniMesimor.Any())
            {
                var planiM = new List<PlaniMesimor>
                {
                    new PlaniMesimor
                    {
                        Id=1,
                        planiInfo="Do te spjegohen bazat e trigonometris",
                        kriteriSuksesit="Nxenesi do mundet te kryej detyra me formule te pitagores",
                        dataShenimit=DateTime.Now
                    }
                };
                context.PlaniMesimor.AddRange(planiM);
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
                var prezantime = new List<Prezantimi>
                {
                    new Prezantimi
                    {
                        prezantimiInfo="Prezantimi do perfshij mbrojtjen e punimit ne lenden Matematike",
                        kohezgjatja="20 minuta",
                        data="03-07-2021",
                        ora="12:45 PM"
                    }
                };
                context.Prezantimet.AddRange(prezantime);
                context.SaveChanges();
            };

            if(!context.Qytetet.Any())
            {
                var qytete = new List<Qyteti>
                {
                    new Qyteti
                    {
                        Emri="Mitrovicë",
                        Shteti="Kosovë"
                    },
                    new Qyteti
                    {
                        Emri="Rahovec",
                        Shteti="Kosovë"
                    },
                    new Qyteti
                    {
                        Emri="Ulqin",
                        Shteti="Mali i Zi"
                    },
                    new Qyteti
                    {
                        Emri="Prishtinë",
                        Shteti="Kosovë"
                    },
                    new Qyteti
                    {
                        Emri="Prizren",
                        Shteti="Kosovë"
                    },
                    new Qyteti
                    {
                        Emri="Gjakovë",
                        Shteti="Kosovë"
                    },
                    new Qyteti
                    {
                        Emri="Pejë",
                        Shteti="Kosovë"
                    }
                };
                context.Qytetet.AddRange(qytete);
                context.SaveChanges();
            };
            if(!context.Klaset.Any())
            {
                var klaset = new List<Klasa>
                {
                    new Klasa
                    {
                        EmriKl="X",
                    },
                    new Klasa
                    {
                        EmriKl="XI",
                    },
                    new Klasa
                    {
                        EmriKl="XII",
                    }
                };
                context.Klaset.AddRange(klaset);
                context.SaveChanges();
            };
            if(!context.VitetAkademike.Any())
            {
                var viteAkademike = new List<VitiAkademik>
                {
                    new VitiAkademik
                    {
                        VitiAk="17/18",
                    },
                    new VitiAkademik
                    {
                        VitiAk="18/19",
                    },
                    new VitiAkademik
                    {
                        VitiAk="18/19",
                    },
                    new VitiAkademik
                    {
                        VitiAk="19/20",
                    },
                    new VitiAkademik
                    {
                        VitiAk="20/21",
                    }
                };
                context.VitetAkademike.AddRange(viteAkademike);
                context.SaveChanges();
            };
        }

    }
}