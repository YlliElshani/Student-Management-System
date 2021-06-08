using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class KerkesaNdihmes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KerkesaN",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    kerkesaInfo = table.Column<string>(nullable: true),
                    dataECaktuar = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KerkesaN", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KerkesaN");
        }
    }
}
