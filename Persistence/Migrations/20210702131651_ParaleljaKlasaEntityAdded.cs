using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ParaleljaKlasaEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ParaleletKlaset",
                columns: table => new
                {
                    ParaleljaKlasaId = table.Column<Guid>(nullable: false),
                    EmriKl = table.Column<string>(nullable: true),
                    EmriPar = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParaleletKlaset", x => x.ParaleljaKlasaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ParaleletKlaset");
        }
    }
}
