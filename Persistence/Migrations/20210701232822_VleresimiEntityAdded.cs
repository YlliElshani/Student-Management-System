using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
<<<<<<< HEAD:Persistence/Migrations/20210701232155_UsersCity.cs
    public partial class UsersCity : Migration
=======
    public partial class VleresimiEntityAdded : Migration
>>>>>>> c14b6b0d6c1e8739be5474a990c0a04bcc70bfa4:Persistence/Migrations/20210701232822_VleresimiEntityAdded.cs
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Arsyet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ArsyejaMungeses = table.Column<string>(nullable: true),
                    nrDiteve = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arsyet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Descripion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(nullable: true),
                    Age = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Competitions",
                columns: table => new
                {
                    competitionId = table.Column<Guid>(nullable: false),
                    name = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    field = table.Column<string>(nullable: true),
                    awards = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competitions", x => x.competitionId);
                });

            migrationBuilder.CreateTable(
                name: "Detyrat",
                columns: table => new
                {
                    DetyraId = table.Column<Guid>(nullable: false),
                    DetyraEmri = table.Column<string>(nullable: true),
                    Pershkrimi = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Detyrat", x => x.DetyraId);
                });

            migrationBuilder.CreateTable(
                name: "Eventet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    infoEvent = table.Column<string>(nullable: true),
                    dataEEventit = table.Column<DateTime>(nullable: false),
                    kategoria = table.Column<string>(nullable: true),
                    vendiMbajtjes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eventet", x => x.Id);
                });

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

            migrationBuilder.CreateTable(
                name: "Klaset",
                columns: table => new
                {
                    KlasaId = table.Column<Guid>(nullable: false),
                    EmriKl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klaset", x => x.KlasaId);
                });

            migrationBuilder.CreateTable(
<<<<<<< HEAD:Persistence/Migrations/20210701232155_UsersCity.cs
                name: "Kohezgjatjet",
=======
                name: "Kohezgjatja",
>>>>>>> c14b6b0d6c1e8739be5474a990c0a04bcc70bfa4:Persistence/Migrations/20210701232822_VleresimiEntityAdded.cs
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    kohaMin = table.Column<int>(nullable: false),
                    oraNisjes = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
<<<<<<< HEAD:Persistence/Migrations/20210701232155_UsersCity.cs
                    table.PrimaryKey("PK_Kohezgjatjet", x => x.Id);
=======
                    table.PrimaryKey("PK_Kohezgjatja", x => x.Id);
>>>>>>> c14b6b0d6c1e8739be5474a990c0a04bcc70bfa4:Persistence/Migrations/20210701232822_VleresimiEntityAdded.cs
                });

            migrationBuilder.CreateTable(
                name: "Lendet",
                columns: table => new
                {
                    LendaId = table.Column<Guid>(nullable: false),
                    Emri = table.Column<string>(nullable: true),
                    Klasa = table.Column<string>(nullable: true),
                    Profesori = table.Column<string>(nullable: true),
                    Descripion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lendet", x => x.LendaId);
                });

            migrationBuilder.CreateTable(
                name: "Njoftimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Njoftimi = table.Column<string>(nullable: true),
                    DataENjoftimit = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Njoftimet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notat",
                columns: table => new
                {
                    NotaId = table.Column<Guid>(nullable: false),
                    Lenda = table.Column<string>(nullable: true),
                    Grade = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notat", x => x.NotaId);
                });

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

            migrationBuilder.CreateTable(
                name: "PlaniMesimor",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    planiInfo = table.Column<string>(nullable: true),
                    kriteriSuksesit = table.Column<string>(nullable: true),
                    dataShenimit = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlaniMesimor", x => x.Id);
                });

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

            migrationBuilder.CreateTable(
                name: "Qytetet",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Emri = table.Column<string>(nullable: true),
                    Shteti = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qytetet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trajnimet",
                columns: table => new
                {
                    TrajnimId = table.Column<Guid>(nullable: false),
                    TrajnimEmri = table.Column<string>(nullable: true),
                    Pershkrimi = table.Column<string>(nullable: true),
                    numriDiteve = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trajnimet", x => x.TrajnimId);
                });

            migrationBuilder.CreateTable(
                name: "Trips",
                columns: table => new
                {
                    tripId = table.Column<Guid>(nullable: false),
                    name = table.Column<string>(nullable: true),
                    place = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    participants = table.Column<string>(nullable: true),
                    price = table.Column<string>(nullable: true),
                    user = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.tripId);
                });

            migrationBuilder.CreateTable(
                name: "Vijushmerit",
                columns: table => new
                {
                    VijushmeriaId = table.Column<Guid>(nullable: false),
                    Pjesmarrja = table.Column<string>(nullable: true),
                    Studenti = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vijushmerit", x => x.VijushmeriaId);
                });

            migrationBuilder.CreateTable(
                name: "VitetAkademike",
                columns: table => new
                {
                    VitiAkademikId = table.Column<Guid>(nullable: false),
                    VitiAk = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VitetAkademike", x => x.VitiAkademikId);
                });

            migrationBuilder.CreateTable(
                name: "Vleresimet",
                columns: table => new
                {
                    VleresimiId = table.Column<Guid>(nullable: false),
                    Lenda = table.Column<string>(nullable: true),
                    Nota = table.Column<int>(nullable: false),
                    DataEVendosjes = table.Column<string>(nullable: true),
                    OraEVendosjes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vleresimet", x => x.VleresimiId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Arsyet");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Competitions");

            migrationBuilder.DropTable(
                name: "Detyrat");

            migrationBuilder.DropTable(
                name: "Eventet");

            migrationBuilder.DropTable(
                name: "KerkesaN");

            migrationBuilder.DropTable(
                name: "Klaset");

            migrationBuilder.DropTable(
<<<<<<< HEAD:Persistence/Migrations/20210701232155_UsersCity.cs
                name: "Kohezgjatjet");
=======
                name: "Kohezgjatja");
>>>>>>> c14b6b0d6c1e8739be5474a990c0a04bcc70bfa4:Persistence/Migrations/20210701232822_VleresimiEntityAdded.cs

            migrationBuilder.DropTable(
                name: "Lendet");

            migrationBuilder.DropTable(
                name: "Njoftimet");

            migrationBuilder.DropTable(
                name: "Notat");

            migrationBuilder.DropTable(
                name: "Paralelet");

            migrationBuilder.DropTable(
                name: "PlaniMesimor");

            migrationBuilder.DropTable(
                name: "Prezantimet");

            migrationBuilder.DropTable(
                name: "Qytetet");

            migrationBuilder.DropTable(
                name: "Trajnimet");

            migrationBuilder.DropTable(
                name: "Trips");

            migrationBuilder.DropTable(
                name: "Vijushmerit");

            migrationBuilder.DropTable(
                name: "VitetAkademike");

            migrationBuilder.DropTable(
                name: "Vleresimet");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
