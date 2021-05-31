using System; 

namespace Domain
{
    public class Student : User
    {
        public Guid StudentId {get; set;}
        
        public int YearOfStudy {get; set;}

        public string FieldOfStudy {get; set;}

        public string Grade {get; set;}
    }
}