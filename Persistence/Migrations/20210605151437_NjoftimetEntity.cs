using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class NjoftimetEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Arsyet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ArsyejaMungeses = table.Column<string>(nullable: true),
                    nrDiteve = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arsyet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Detyrat",
                columns: table => new
                {
                    DetyraId = table.Column<Guid>(nullable: false),
                    DetyraEmri = table.Column<string>(nullable: true),
                    Pershkrimi = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Detyrat", x => x.DetyraId);
                });

            migrationBuilder.CreateTable(
                name: "Lendet",
                columns: table => new
                {
                    LendaId = table.Column<Guid>(nullable: false),
                    Emri = table.Column<string>(nullable: true),
                    Klasa = table.Column<string>(nullable: true),
                    Profesori = table.Column<string>(nullable: true),
                    Descripion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lendet", x => x.LendaId);
                });

            migrationBuilder.CreateTable(
                name: "Njoftimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Njoftimi = table.Column<string>(nullable: true),
                    DataENjoftimit = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Njoftimet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notat",
                columns: table => new
                {
                    NotaId = table.Column<Guid>(nullable: false),
                    Lenda = table.Column<string>(nullable: true),
                    Grade = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notat", x => x.NotaId);
                });

            migrationBuilder.CreateTable(
                name: "Trips",
                columns: table => new
                {
                    tripId = table.Column<Guid>(nullable: false),
                    name = table.Column<string>(nullable: true),
                    place = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    participants = table.Column<string>(nullable: true),
                    price = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.tripId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Role = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    nrKidsEnrolled = table.Column<int>(nullable: true),
                    GradaAkademike = table.Column<string>(nullable: true),
                    Studimet = table.Column<string>(nullable: true),
                    StudentId = table.Column<Guid>(nullable: true),
                    YearOfStudy = table.Column<int>(nullable: true),
                    FieldOfStudy = table.Column<string>(nullable: true),
                    Grade = table.Column<string>(nullable: true),
                    titulliZyrtar = table.Column<string>(nullable: true),
                    viteEksperienc = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Arsyet");

            migrationBuilder.DropTable(
                name: "Detyrat");

            migrationBuilder.DropTable(
                name: "Lendet");

            migrationBuilder.DropTable(
                name: "Njoftimet");

            migrationBuilder.DropTable(
                name: "Notat");

            migrationBuilder.DropTable(
                name: "Trips");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
