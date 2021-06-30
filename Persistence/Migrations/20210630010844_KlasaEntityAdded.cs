using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class KlasaEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Klaset",
                columns: table => new
                {
                    KlasaId = table.Column<Guid>(nullable: false),
                    Emrikl = table.Column<string>(nullable: true),
                   
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klaset", x => x.KlasaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Klaset");
        }
    }
}
