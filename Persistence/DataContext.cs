using Domain;
using Domain.obj;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base (options)
        {
            
        }

        public DbSet <User> Users {get; set;}
<<<<<<< HEAD
        public DbSet <Lenda> Lendet {get; set;}
=======
        public DbSet<Admin> Admins{get; set;}
>>>>>>> 64905f49871440fdbde8d8bad68cb8efe5daa69f

        protected override void OnModelCreating(ModelBuilder builder)
        {
        }

    }
}