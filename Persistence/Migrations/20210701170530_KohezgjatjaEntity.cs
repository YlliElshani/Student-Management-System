using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class KohezgjatjaEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kohezgjatjet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    kohaMin = table.Column<int>(nullable: false),
                    oraNisjes = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kohezgjatjet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kohezgjatjet");
        }
    }
}
