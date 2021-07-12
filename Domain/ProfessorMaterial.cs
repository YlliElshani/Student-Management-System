using System; 

namespace Domain
{
    public class ProfessorMaterial
    {
        public string AppUserId { get; set; }

        public virtual AppUser AppUser { get; set; }

        public Guid MaterialiId { get; set; }

        public virtual Materiali Materiali { get; set; }
    }
}