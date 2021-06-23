using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class PrezantimiEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Prezantimet",
                columns: table => new
                {
                    prezantimiId = table.Column<Guid>(nullable: false),
                    prezantimiInfo = table.Column<string>(nullable: true),
                    kohezgjatja = table.Column<string>(nullable: true),
                    data = table.Column<string>(nullable: true),
                    ora = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prezantimet", x => x.prezantimiId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Prezantimet");
        }
    }
}
