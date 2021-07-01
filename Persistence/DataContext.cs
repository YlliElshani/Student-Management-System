using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser, AppRole, string>
    {
        public DataContext(DbContextOptions options) : base (options)
        {
            
        }

        public DbSet <Prezantimi> Prezantimet {get; set;}

        public DbSet <Vijushmeria> Vijushmerit {get; set;}

         public DbSet <Kohezgjatja> Kohezgjatjet {get; set;}

        public DbSet <Lenda> Lendet {get; set;}

        public DbSet <Trip> Trips {get; set;}

        public DbSet <Nota> Notat {get; set;}

        public DbSet <Arsyetim> Arsyet {get; set;}

        public DbSet <Detyra> Detyrat {get; set;}

        public DbSet <Njoftime> Njoftimet {get; set;}

        public DbSet <Trajnim> Trajnimet {get; set;}

        public DbSet <Competition> Competitions {get; set;}

        public DbSet <Paralelja> Paralelet {get; set;}

        public DbSet <KerkesaNdihmes> KerkesaN {get; set;}

        public DbSet <Evente> Eventet {get; set;}

        public DbSet <AppRole> AppRole { get; set; }

        public DbSet <AppUser> AppUser {get; set;}

        public DbSet <PlaniMesimor> PlaniMesimor {get; set;}
        public DbSet <Qyteti> Qytetet {get; set;}
        public DbSet <Klasa> Klaset {get; set;}
        public DbSet <VitiAkademik> VitetAkademike {get; set; }
        public DbSet <Kohezgjatja> Kohezgjatja {get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }

    }
}