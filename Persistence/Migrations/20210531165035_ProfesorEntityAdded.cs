using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ProfesorEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GradaAkademike",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Studimet",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GradaAkademike",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Studimet",
                table: "Users");
        }
    }
}
