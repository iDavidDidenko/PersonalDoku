
using Microsoft.EntityFrameworkCore;
using Tables;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<User> User { get; set; }
        public DbSet<Contents> Contents { get; set; }
    }
}