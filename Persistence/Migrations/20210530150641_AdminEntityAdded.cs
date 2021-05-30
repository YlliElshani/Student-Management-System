using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AdminEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Users",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "titulliZyrtar",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "viteEksperienc",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "titulliZyrtar",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "viteEksperienc",
                table: "Users");
        }
    }
}
