using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class KerkesaPrezantimit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KerkesaP",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    prezantimiInfo = table.Column<string>(nullable: true),
                    koheZgjatjaPerafert = table.Column<int>(nullable: false),
                    dataCaktuar = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KerkesaP", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KerkesaP");
        }
    }
}
