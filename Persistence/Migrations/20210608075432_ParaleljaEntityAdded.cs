using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ParaleljaEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Paralelet",
                columns: table => new
                {
                    ParaleljaId = table.Column<Guid>(nullable: false),
                    Klasa = table.Column<string>(nullable: true),
                    Paralele = table.Column<string>(nullable: true),
                    Kujdestari = table.Column<string>(nullable: true),
                    NrNxenesve = table.Column<int>(nullable: false),
                    Gjenerata = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paralelet", x => x.ParaleljaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Paralelet");
        }
    }
}
