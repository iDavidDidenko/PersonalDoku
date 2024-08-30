
namespace Tables
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int age { get; set; }
        public string password { get; set;}
        public string pathToUserProfile { get; set; } // Avatar
    }
}
