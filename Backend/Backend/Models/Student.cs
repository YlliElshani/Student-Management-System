using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
	public class Student
	{
		public int StudentID { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Gender { get; set; }
		public int Age { get; set; }
		public string Address { get; set; }
		public string PhoneNumber { get; set; }
		public string Email { get; set; }
		public string Birthday { get; set; }
		public string ParentName { get; set; }
		public string Hometown { get; set; }
	}
}
