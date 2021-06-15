using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class EventeEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eventet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    infoEvent = table.Column<string>(nullable: true),
                    dataEEventit = table.Column<DateTime>(nullable: false),
                    kategoria = table.Column<string>(nullable: true),
                    vendiMbajtjes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eventet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Eventet");
        }
    }
}
