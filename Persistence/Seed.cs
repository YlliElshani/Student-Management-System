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
                    Id = "a",
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
                    Id = "b",
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
                await userManager.AddToRoleAsync(secondUser, Roles.Student);

                var thirdUser = new AppUser
                {
                    Id = "c",
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
                await userManager.AddToRoleAsync(thirdUser, Roles.Student);

                var fourthUser = new AppUser
                {
                    Id = "d",
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
                await userManager.AddToRoleAsync(fourthUser, Roles.Student);

                var fifthUser = new AppUser
                {
                    Id = "e",
                    DisplayName = "Lulzim Zllanoga",
                    UserName = "Lulzim",
                    Email = "atmane.z@gmail.com",
                    Age = "54",
                    City = "Rahovec",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(fifthUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(fifthUser, Roles.Guardian);

                var sixthUser = new AppUser
                {
                    Id = "f",
                    DisplayName = "Bashkim Elshani",
                    UserName = "Bashkim",
                    Email = "bashka@gmail.com",
                    Age = "45",
                    City = "Peje",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(sixthUser, "Pa$$w0rd");
                await userManager.AddToRoleAsync(sixthUser, Roles.Guardian);

                 var seventh = new AppUser
                {
                    Id = "g",
                    DisplayName = "Lavdim Menxhiqi",
                    UserName = "Lavdim",
                    Email = "lavdim@gmail.com",
                    Age = "28",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(seventh, "Pa$$w0rd");
                await userManager.AddToRoleAsync(seventh, Roles.Profesor);

                 var eigth = new AppUser
                {
                    Id = "h",
                    DisplayName = "Blerim Zylfiu",
                    UserName = "Blerim",
                    Email = "blerim@gmail.com",
                    Age = "28",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(eigth, "Pa$$w0rd");
                await userManager.AddToRoleAsync(eigth, Roles.Profesor);

                 var ninth = new AppUser
                {
                    Id = "i",
                    DisplayName = "Ramiz Hoxha",
                    UserName = "Ramiz",
                    Email = "ramiz@gmail.com",
                    Age = "43",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(ninth, "Pa$$w0rd");
                await userManager.AddToRoleAsync(ninth, Roles.Profesor);

                 var tenth = new AppUser
                {
                    Id = "j",
                    DisplayName = "Arber Kadriu",
                    UserName = "Arber",
                    Email = "arber@gmail.com",
                    Age = "27",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(tenth, "Pa$$w0rd");
                await userManager.AddToRoleAsync(tenth, Roles.Profesor);

                var eleventh = new AppUser
                {
                    Id = "k",
                    DisplayName = "Bertan Karahoda",
                    UserName = "bertan",
                    Email = "bertan@gmail.com",
                    Age = "47",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(eleventh, "Pa$$w0rd");
                await userManager.AddToRoleAsync(eleventh, Roles.Admin);


                var twelfth = new AppUser
                {
                    Id = "l",
                    DisplayName = "Edmond Hajrizi",
                    UserName = "Edmond",
                    Email = "edmond@gmail.com",
                    Age = "48",
                    City = "Prishtine",
                    Address = "Mizair Isma",
                    ZipCode = "21000",
                    PhoneNumber = "044 - 675 - 192"
                };
                await userManager.CreateAsync(twelfth, "Pa$$w0rd");
                await userManager.AddToRoleAsync(twelfth, Roles.Admin);

            };

            if(!context.Provimet.Any())
            {
                var provimet = new List<Provimi>
                {
                    new Provimi
                    {
                        Lenda = "Lab",
                        OraENisjes = 10,
                        KoheZgjatja = 45,
                        Salla = "A002",
                        Profesori = "Lavdim Menxhiqi"
                    },
                    new Provimi
                    {
                        Lenda = "SHK2",
                        OraENisjes = 09,
                        KoheZgjatja = 90,
                        Salla = "A008",
                        Profesori = "Lavdim Menxhiqi"
                    }
                }; 
                context.Provimet.AddRange(provimet);
                context.SaveChanges();
            }

            
            if(!context.Materialet.Any())
            {
                var materialet = new List<Materiali>
                {
                    new Materiali
                    {
                        Titulli="Algorithms 4th Edition",
                        Pershkrimi="Materiali dallon nga edicioni i 3-t??, ??sht?? riorganizuar dhe rishkruar n?? m??nyr?? thelb??sore. Ndryshimet pasqyrojn?? nj?? model t?? q??ndruesh??m modern t?? programimit, theksojn?? zbatimet n?? shkenc?? dhe industri. Ai gjithashtu p??rfshin tema t?? ndryshme (p.sh., vargjet) dhe p??rdor ve??ori t?? reja n?? Java",
                        Lenda="Algoritmet",
                        Perioda="Perioda e dyt??",
                        FileDrop="https://algs4.cs.princeton.edu/home/"
                    },
                    new Materiali
                    {
                        Titulli="Permbledhje",
                        Pershkrimi="Materiali p??rmban p??rmbledhje t?? t?? gjitha temave t?? ng??rthyera n?? k??t?? l??nd??.",
                        Lenda="Inxhinieri Softuerike",
                        Perioda="Perioda e dyt??",
                        FileDrop="https://filebin.net/a2tsaykahfr7orqg"
                    }
                };
                context.Materialet.AddRange(materialet);
                context.SaveChanges();
            }
            

            if(!context.Detyrat.Any())
            {
                var detyrat = new List<Detyra>
                {
                    new Detyra
                    {
                        DetyraEmri = "Projekt Lab",
                        Lenda = "Lab Course",
                        Klasa = "X",
                        Profesori = "Endrit Makolli",
                        Pershkrimi = "shorturl.at/kxPWZ",
                        
                    },
                     new Detyra
                    {
                        DetyraEmri = "Projekti Individual",
                        Lenda = "Web",
                        Klasa = "XII",
                        Profesori = "Altina Hodaj",
                        Pershkrimi = "shorturl.at/kxYXFsndfSPWZ",
                        
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
                        TrajnimEmri = "Perseritje Modulet",
                        Pershkrimi = "2/12/2020 ne ora 10:00",
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
                        Emri = "Fizike", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    },
                    new Lenda
                    {
                        Emri = "Gjuhe Shqipe", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    },
                    new Lenda
                    {
                        Emri = "Kimi", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    },
                    new Lenda
                    {
                        Emri = "Biologji", 
                        Klasa= "XII",
                        Profesori="Filan Fisteku", 
                        Descripion="Lende e klases se 12te"
                        
                    },
                    new Lenda
                    {
                        Emri = "Teknologji", 
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
                        name = "Vizit?? n?? qytetin e Shkodr??s",
                        place = "Shkod??r",
                        date = "2021-06-30",
                        description = "Ekskursioni ??sht?? nj?? ditor dhe organizohet pas p??rfundimit t?? semestrit p??r t?? gjith?? nx??n??sit q?? duan t?? arg??tohen dhe t?? vizitojn?? qytetin e Shkodr??s",
                        participants = "Vet??m nx??n??sit e vitit t?? tret??",
                        price = "Pagesat i mbulon shkolla"

                    },
                    new Trip
                    {
                        name = "Vizit?? n?? qytetin e Shkodr??s",
                        place = "Shkod??r",
                        date = "2021-06-30",
                        description = "Ekskursioni ??sht?? nj?? ditor dhe organizohet pas p??rfundimit t?? semestrit p??r t?? gjith?? nx??n??sit q?? duan t?? arg??tohen dhe t?? vizitojn?? qytetin e Shkodr??s",
                        participants = "Vet??m nx??n??sit e vitit t?? tret??",
                        price = "Pagesat i mbulon shkolla"

                    },
                    new Trip
                    {
                        name = "Vizit?? n?? qytetin e Shkodr??s",
                        place = "Shkod??r",
                        date = "2021-06-30",
                        description = "Ekskursioni ??sht?? nj?? ditor dhe organizohet pas p??rfundimit t?? semestrit p??r t?? gjith?? nx??n??sit q?? duan t?? arg??tohen dhe t?? vizitojn?? qytetin e Shkodr??s",
                        participants = "Vet??m nx??n??sit e vitit t?? tret??",
                        price = "Pagesat i mbulon shkolla"

                    },
                    new Trip
                    {
                        name = "Vizit?? n?? qytetin e Shkodr??s",
                        place = "Shkod??r",
                        date = "2021-06-30",
                        description = "Ekskursioni ??sht?? nj?? ditor dhe organizohet pas p??rfundimit t?? semestrit p??r t?? gjith?? nx??n??sit q?? duan t?? arg??tohen dhe t?? vizitojn?? qytetin e Shkodr??s",
                        participants = "Vet??m nx??n??sit e vitit t?? tret??",
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
                        Grade = 5
                    },
                    new Nota
                    {
                        Grade = 4    
                    },
                    new Nota
                    {
                        Grade = 3
                    },
                    new Nota
                    {
                        Grade = 2
                    },
                    new Nota
                    {
                        Grade = 1
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
                        field = "Matematik??",
                        awards = "Certifikat??"
                    },
                    new Competition
                    {
                        name = "Math Genius",
                        date = "21-07-2021",
                        description = "Gara organizohet ne kuader te shkolles dhe brenda kornizave te saj",
                        field = "Matematik??",
                        awards = "Certifikat??"
                    },
                    new Competition
                    {
                        name = "Math Genius",
                        date = "21-07-2021",
                        description = "Gara organizohet ne kuader te shkolles dhe brenda kornizave te saj",
                        field = "Matematik??",
                        awards = "Certifikat??"
                    },
                    new Competition
                    {
                        name = "Math Genius",
                        date = "21-07-2021",
                        description = "Gara organizohet ne kuader te shkolles dhe brenda kornizave te saj",
                        field = "Matematik??",
                        awards = "Certifikat??"
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
                                },
                                new Vijushmeria
                                {
                                    Pjesmarrja = "100%", 
                                    Studenti= "Hysnije Zllanoga"                  
                                }
                            
                            };
                            context.Vijushmerit.AddRange(vijushmerit);
                            context.SaveChanges();
                        };

                        if(!context.Evidencat.Any())
                        {
                            var evidence = new List<EvidencaPrindeve>
                            {
                                new EvidencaPrindeve
                                {
                                    evidencaInfo="Sot kam konsultuar me prindin rreth suksesit akademik te nxenesit",
                                    displayName="Fisteku Filan",
                                    displayName2="Filan Fisteku"
                                }
                            
                            };
                            context.Evidencat.AddRange(evidence);
                            context.SaveChanges();
                        };

                          
            if(!context.Periodat.Any())
                        {
                            var periodat = new List<Perioda>
                            {
                                new Perioda
                                {
                                    Emri = "Perioda E Pare", 
                                    Fillimi= "7/2/2021",
                                    Mbarimi= "11/4/2021"                     
                                },
                                new Perioda
                                {
                                    Emri = "Perioda E Dyte", 
                                    Fillimi= "17/4/2021",
                                    Mbarimi= "21/6/2021"  
                                }
                            
                            };
                            context.Periodat.AddRange(periodat);
                            context.SaveChanges();
                        };


            if(!context.KerkesaN.Any())
            {
                var kerkesat = new List<KerkesaNdihmes>
                {
                    new KerkesaNdihmes
                    {
                        kerkesaInfo="Kam nevoje per ndihm rreth numrave kompleks",
                        emri="Matematike",
                        displayName="Filan Fisteku",
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
                        infoEvent="Do te festohet 28 N??ntori ne shkolle me kercime tradicionale",
                        dataEEventit=DateTime.Now,
                        kategoria="Feste",
                        vendiMbajtjes="Ne sall??n kryesore"
                    }
                };
                context.Eventet.AddRange(evente);
                context.SaveChanges();
            };

            
            if(!context.PlanetMesimor.Any())
            {
                var planeM = new List<PlaniMesimor>
                {
                    new PlaniMesimor
                    {
                        PlaniInfo="Do te spjegohen bazat e trigonometris",
                        KriteriPlotsimit="Nxenesi do mund te kryej detyra me formule te pitagores"
                    },
                    new PlaniMesimor
                    {
                        PlaniInfo="Do te spjegohen bazat e numrave kompleks",
                        KriteriPlotsimit="Nxenesi do mund te kryej detyra te komplikuara"
                    }
                };
                context.PlanetMesimor.AddRange(planeM);
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
                        lenda="Matematike",
                        profesori="Filan Fisteku",
                        salla="A008",
                        data="2021-08-15",
                        ora="12:45 PM"
                    },
                    new Prezantimi
                    {
                        prezantimiInfo="Prezantimi do perfshij mbrojtjen e punimit ne lenden Astronomi",
                        kohezgjatja="30 minuta",
                        lenda="Astronomi",
                        profesori="Filan Fisteku",
                        salla="A008",
                        data="2021-09-21",
                        ora="13:30 PM"
                    }
                };
                context.Prezantimet.AddRange(prezantime);
                context.SaveChanges();
            };

            if(!context.Kohezgjatjet.Any())
            {
                var koheZ = new List<Kohezgjatja>
                {
                    new Kohezgjatja
                    {
                        kohaMin=45,
                        oraNisjes=9
                    },
                    new Kohezgjatja
                    {
                        kohaMin=60,
                        oraNisjes=12
                    },
                    new Kohezgjatja
                    {
                        kohaMin=120,
                        oraNisjes=13
                    }
                };
                context.Kohezgjatjet.AddRange(koheZ);
                context.SaveChanges();
            };

            if(!context.Qytetet.Any())
            {
                var qytete = new List<Qyteti>
                {
                    new Qyteti
                    {
                        Emri="Mitrovic??",
                        Shteti="Kosov??"
                    },
                    new Qyteti
                    {
                        Emri="Rahovec",
                        Shteti="Kosov??"
                    },
                    new Qyteti
                    {
                        Emri="Ulqin",
                        Shteti="Mali i Zi"
                    },
                    new Qyteti
                    {
                        Emri="Prishtin??",
                        Shteti="Kosov??"
                    },
                    new Qyteti
                    {
                        Emri="Prizren",
                        Shteti="Kosov??"
                    },
                    new Qyteti
                    {
                        Emri="Gjakov??",
                        Shteti="Kosov??"
                    },
                    new Qyteti
                    {
                        Emri="Pej??",
                        Shteti="Kosov??"
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
            if(!context.Kohezgjatjet.Any())
            {
                var kohezgjatja = new List<Kohezgjatja>
                {
                    new Kohezgjatja
                    {
                        kohaMin=45,
                        oraNisjes=08,
                    },
                    new Kohezgjatja
                    {
                        kohaMin=50,
                        oraNisjes=08,
                    },
                };
                context.Kohezgjatjet.AddRange(kohezgjatja);
                context.SaveChanges();
            };
            if(!context.Vleresimet.Any())
            {
                var vleresimet = new List<Vleresimi>
                {
                    new Vleresimi
                    {
                        Studenti="Ylli Elshani",
                        Lenda="Gjuhe Shqipe",
                        Nota=5,
                        DataEVendosjes="09-07-2021",
                        OraEVendosjes="06:47 PM"
                    },
                    new Vleresimi
                    {
                        Studenti="Altina Hodaj",
                        Lenda="Matematike",
                        Nota=3,
                        DataEVendosjes="14-07-2021",
                        OraEVendosjes="05:30 PM"
                    },
                    new Vleresimi
                    {
                        Studenti="Hysnije Zllanoga",
                        Lenda="Kimi",
                        Nota=5,
                        DataEVendosjes="05-07-2021",
                        OraEVendosjes="03:33 PM"
                    },
                };
                context.Vleresimet.AddRange(vleresimet);
                context.SaveChanges();
            };

            if(!context.Paraleleet.Any())
            {
                var paraleleet = new List<Paraleljaa>
                {
                    new Paraleljaa
                    {
                        EmriPar="17/18",
                    },
                    new Paraleljaa
                    {
                        EmriPar="18/19",
                    },
                    new Paraleljaa
                    {
                        EmriPar="18/19",
                    }
                };
                context.Paraleleet.AddRange(paraleleet);
                context.SaveChanges();
            };

            if(!context.ParaleletKlaset.Any())
            {
                var paraleletKlaset = new List<ParaleljaKlasa>
                {
                    new ParaleljaKlasa
                    {
                        EmriKl="X",
                        EmriPar="1",
                    },
                    new ParaleljaKlasa
                    {
                        EmriKl="X",
                        EmriPar="1",
                    },
                    new ParaleljaKlasa
                    {
                        EmriKl="X",
                        EmriPar="1",
                    }
                };
                context.ParaleletKlaset.AddRange(paraleletKlaset);
                context.SaveChanges();
            };

            if(!context.Nderrimet.Any())
            {
                var nderrimet = new List<Nderrimi>
                {
                    new Nderrimi
                    {
                        Ndrr="Paradite",
                    
                    },
                     new Nderrimi
                    {
                        Ndrr="Pasdite",
                    
                    }
                };
                context.Nderrimet.AddRange(nderrimet);
                context.SaveChanges();
            };
            
            if(!context.Sallat.Any())
            {
                var sallat = new List<Salla>
                {
                    new Salla
                    {
                        Emri="A210",
                        Kapaciteti=80,
                        Statusi="E Rezervuar",
                        DataRezervimit="10-07-2021",
                        OraRezervimit="10:40 AM"
                    },
                    new Salla
                    {
                        Emri="A008",
                        Kapaciteti=80,
                        Statusi="E Lir??",
                        DataRezervimit="14-07-2021",
                        OraRezervimit="09:40 AM"
                    },
                    new Salla
                    {
                        Emri="A002",
                        Kapaciteti=80,
                        Statusi="E Lir??",
                        DataRezervimit="15-07-2021",
                        OraRezervimit="12:30 PM"
                    },
                    new Salla
                    {
                        Emri="A001",
                        Kapaciteti=80,
                        Statusi="E Rezervuar",
                        DataRezervimit="17-07-2021",
                        OraRezervimit="10:40 AM"
                    },
                };
                context.Sallat.AddRange(sallat);
                context.SaveChanges();
            };
        }

    }
}