namespace Tables
{
    public class Contents
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid FileId { get; set; }
        public string FileType { get; set; }
        public string FileName { get; set; }
    }
}