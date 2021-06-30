using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class PlaniLendaEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PlaniMesimor",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    planiInfo = table.Column<string>(nullable: true),
                    kriteriSuksesit = table.Column<string>(nullable: true),
                    dataShenimit = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlaniMesimor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PlaniLenda",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    idP = table.Column<int>(nullable: false),
                    LendaId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlaniLenda", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PlaniLenda_PlaniMesimor_Id",
                        column: x => x.Id,
                        principalTable: "PlaniMesimor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PlaniLenda_Lendet_LendaId",
                        column: x => x.LendaId,
                        principalTable: "Lendet",
                        principalColumn: "LendaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlaniLenda_LendaId",
                table: "PlaniLenda",
                column: "LendaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlaniLenda");

            migrationBuilder.DropTable(
                name: "PlaniMesimor");
        }
    }
}
