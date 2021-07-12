using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ProfesorMaterialsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProfessorMaterials",
                columns: table => new
                {
                    AppUserId = table.Column<string>(nullable: false),
                    MaterialiId = table.Column<Guid>(nullable: false),
                    DateJoined = table.Column<DateTime>(nullable: false),
                    IsHost = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfessorMaterials", x => new { x.AppUserId, x.MaterialiId });
                    table.ForeignKey(
                        name: "FK_ProfessorMaterials_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProfessorMaterials_Materialet_MaterialiId",
                        column: x => x.MaterialiId,
                        principalTable: "Materialet",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProfessorMaterials_MaterialiId",
                table: "ProfessorMaterials",
                column: "MaterialiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProfessorMaterials");
        }
    }
}
