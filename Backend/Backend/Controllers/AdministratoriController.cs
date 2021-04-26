using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratoriController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AdministratoriController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select AdministratoriID, FirstName, LastName, Gender, Age, Address, PhoneNumber, Email, Birthday, ParentName, Hometown from dbo.Administratori";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SmsAppCon");
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
        public JsonResult Post(Administratori ad)
        {
            string query = @"
                    insert into dbo.Administratori (FirstName, LastName,Gender, Age, Address, PhoneNumber, Email,	Birthday, ParentName, Hometown) values 
                            ('" + ad.FirstName + @"'
                            ,'" + ad.LastName + @"' 
                            ,'" + ad.Gender + @"'
                            ,'" + ad.Age + @"'
                            ,'" + ad.Address + @"'
                            ,'" + ad.PhoneNumber + @"'
                            ,'" + ad.Email + @"'
                            ,'" + ad.Birthday + @"'
                            ,'" + ad.ParentName + @"'
                            ,'" + ad.Hometown + @"')
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SmsAppCon");
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
        public JsonResult Put(Administratori ad)
        {
            string query = @"update dbo.Administratori set 
                            FirstName = '" + ad.FirstName + @"'
                            ,LastName = '" + ad.LastName + @"' 
                            ,Gender = '" + ad.Gender + @"'
                            ,Age = '" + ad.Age + @"'
                            ,Address = '" + ad.Address + @"'
                            ,PhoneNumber = '" + ad.PhoneNumber + @"'
                            ,Email = '" + ad.Email + @"'
                            ,Birthday = '" + ad.Birthday + @"'
                            ,ParentName = '" + ad.ParentName + @"'
                            ,Hometown = '" + ad.Hometown + @"'
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SmsAppCon");
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
            string query = @"delete from dbo.Administratori where AdministratoriID = " + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SmsAppCon");
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
