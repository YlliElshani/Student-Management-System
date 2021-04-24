using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IConfiguration __configuration;

        public StudentController(IConfiguration configuration)
        {
            __configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select StudentID, FirstName, LastName, Gender, Age, Address, PhoneNumber, Email, Birthday, ParentName, Hometown from dbo.Student";
            DataTable table = new DataTable();
            string sqlDataSource = __configuration.GetConnectionString("SmsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Student st)
        {
            string query = @"insert into dbo.Student (FirstName, LastName,Gender, Age, Address, PhoneNumber, Email,	Birthday, ParentName, Hometown) values 
                            ('" + st.FirstName + @"'
                            ,'" + st.LastName + @"' 
                            ,'" + st.Gender + @"'
                            ,'" + st.Age + @"'
                            ,'" + st.Address + @"'
                            ,'" + st.PhoneNumber + @"'
                            ,'" + st.Email + @"'
                            ,'" + st.Birthday + @"'
                            ,'" + st.ParentName + @"'
                            ,'" + st.Hometown + @"')
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = __configuration.GetConnectionString("SmsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Succesfully");
        }

        [HttpPut]
        public JsonResult Put(Student st)
        {
            string query = @"update dbo.Student set 
                            FirstName = '" + st.FirstName + @"'
                            ,LastName = '" + st.LastName + @"' 
                            ,Gender = '" + st.Gender + @"'
                            ,Age = '" + st.Age + @"'
                            ,Address = '" + st.Address + @"'
                            ,PhoneNumber = '" + st.PhoneNumber + @"'
                            ,Email = '" + st.Email + @"'
                            ,Birthday = '" + st.Birthday + @"'
                            ,ParentName = '" + st.ParentName + @"'
                            ,Hometown = '" + st.Hometown + @"'
                            where StudentID = " +st.StudentID + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = __configuration.GetConnectionString("SmsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Succesfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Student where StudentID = " + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = __configuration.GetConnectionString("SmsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Succesfully");
        }
    }
}
