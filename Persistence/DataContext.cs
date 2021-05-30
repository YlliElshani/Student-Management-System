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
        public DbSet<Admin> Admins{get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
        }

    }
}