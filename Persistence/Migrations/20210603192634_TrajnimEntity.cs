using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class TrajnimEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trajnimet",
                columns: table => new
                {
                    TrajnimId = table.Column<Guid>(nullable: false),
                    TrajnimEmri = table.Column<string>(nullable: true),
                    Pershkrimi = table.Column<string>(nullable: true),
                    numriDiteve = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trajnimet", x => x.TrajnimId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trajnimet");
        }
    }
}
