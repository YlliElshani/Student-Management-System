﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Domain.AppRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Descripion");

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("Address");

                    b.Property<string>("Age");

                    b.Property<string>("City");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("DisplayName");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Domain.Arsyetim", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ArsyejaMungeses");

                    b.Property<int>("nrDiteve");

                    b.HasKey("Id");

                    b.ToTable("Arsyet");
                });

            modelBuilder.Entity("Domain.Competition", b =>
                {
                    b.Property<Guid>("competitionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("awards");

                    b.Property<string>("date");

                    b.Property<string>("description");

                    b.Property<string>("field");

                    b.Property<string>("name");

                    b.HasKey("competitionId");

                    b.ToTable("Competitions");
                });

            modelBuilder.Entity("Domain.Detyra", b =>
                {
                    b.Property<Guid>("DetyraId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DetyraEmri");

                    b.Property<string>("Pershkrimi");

                    b.HasKey("DetyraId");

                    b.ToTable("Detyrat");
                });

            modelBuilder.Entity("Domain.Evente", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("dataEEventit");

                    b.Property<string>("infoEvent");

                    b.Property<string>("kategoria");

                    b.Property<string>("vendiMbajtjes");

                    b.HasKey("Id");

                    b.ToTable("Eventet");
                });

            modelBuilder.Entity("Domain.KerkesaNdihmes", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("dataECaktuar");

                    b.Property<string>("kerkesaInfo");

                    b.HasKey("Id");

                    b.ToTable("KerkesaN");
                });

            modelBuilder.Entity("Domain.Klasa", b =>
                {
                    b.Property<Guid>("KlasaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmriKl");

                    b.HasKey("KlasaId");

                    b.ToTable("Klaset");
                });

            modelBuilder.Entity("Domain.Kohezgjatja", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("kohaMin");

                    b.Property<float>("oraNisjes");

                    b.HasKey("Id");

                    b.ToTable("Kohezgjatjet");
                });

            modelBuilder.Entity("Domain.Lenda", b =>
                {
                    b.Property<Guid>("LendaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descripion");

                    b.Property<string>("Emri");

                    b.Property<string>("Klasa");

                    b.Property<string>("Profesori");

                    b.HasKey("LendaId");

                    b.ToTable("Lendet");
                });

            modelBuilder.Entity("Domain.Materiali", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileDrop");

                    b.Property<string>("Lenda");

                    b.Property<string>("Perioda");

                    b.Property<string>("Pershkrimi");

                    b.Property<string>("Titulli");

                    b.HasKey("id");

                    b.ToTable("Materialet");
                });

            modelBuilder.Entity("Domain.Nderrimi", b =>
                {
                    b.Property<Guid>("NderrimiId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Ndrr");

                    b.HasKey("NderrimiId");

                    b.ToTable("Nderrimet");
                });

            modelBuilder.Entity("Domain.Njoftime", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DataENjoftimit");

                    b.Property<string>("Njoftimi");

                    b.HasKey("Id");

                    b.ToTable("Njoftimet");
                });

            modelBuilder.Entity("Domain.Nota", b =>
                {
                    b.Property<Guid>("NotaId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Grade");

                    b.Property<string>("Lenda");

                    b.HasKey("NotaId");

                    b.ToTable("Notat");
                });

            modelBuilder.Entity("Domain.Orari", b =>
                {
                    b.Property<Guid>("OrariId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Dita");

                    b.Property<string>("Gjenerata");

                    b.Property<string>("Klasa");

                    b.Property<string>("KohaEnjt1");

                    b.Property<string>("KohaEnjt2");

                    b.Property<string>("KohaEnjt3");

                    b.Property<string>("KohaEnjt4");

                    b.Property<string>("KohaEnjt5");

                    b.Property<string>("KohaEnjt6");

                    b.Property<string>("KohaEnjt7");

                    b.Property<string>("KohaHen1");

                    b.Property<string>("KohaHen2");

                    b.Property<string>("KohaHen3");

                    b.Property<string>("KohaHen4");

                    b.Property<string>("KohaHen5");

                    b.Property<string>("KohaHen6");

                    b.Property<string>("KohaHen7");

                    b.Property<string>("KohaMar1");

                    b.Property<string>("KohaMar2");

                    b.Property<string>("KohaMar3");

                    b.Property<string>("KohaMar4");

                    b.Property<string>("KohaMar5");

                    b.Property<string>("KohaMar6");

                    b.Property<string>("KohaMar7");

                    b.Property<string>("KohaMer1");

                    b.Property<string>("KohaMer2");

                    b.Property<string>("KohaMer3");

                    b.Property<string>("KohaMer4");

                    b.Property<string>("KohaMer5");

                    b.Property<string>("KohaMer6");

                    b.Property<string>("KohaMer7");

                    b.Property<string>("KohaPre1");

                    b.Property<string>("KohaPre2");

                    b.Property<string>("KohaPre3");

                    b.Property<string>("KohaPre4");

                    b.Property<string>("KohaPre5");

                    b.Property<string>("KohaPre6");

                    b.Property<string>("KohaPre7");

                    b.Property<string>("LendaEnjt1");

                    b.Property<string>("LendaEnjt2");

                    b.Property<string>("LendaEnjt3");

                    b.Property<string>("LendaEnjt4");

                    b.Property<string>("LendaEnjt5");

                    b.Property<string>("LendaEnjt6");

                    b.Property<string>("LendaEnjt7");

                    b.Property<string>("LendaHen1");

                    b.Property<string>("LendaHen2");

                    b.Property<string>("LendaHen3");

                    b.Property<string>("LendaHen4");

                    b.Property<string>("LendaHen5");

                    b.Property<string>("LendaHen6");

                    b.Property<string>("LendaHen7");

                    b.Property<string>("LendaMar1");

                    b.Property<string>("LendaMar2");

                    b.Property<string>("LendaMar3");

                    b.Property<string>("LendaMar4");

                    b.Property<string>("LendaMar5");

                    b.Property<string>("LendaMar6");

                    b.Property<string>("LendaMar7");

                    b.Property<string>("LendaMer1");

                    b.Property<string>("LendaMer2");

                    b.Property<string>("LendaMer3");

                    b.Property<string>("LendaMer4");

                    b.Property<string>("LendaMer5");

                    b.Property<string>("LendaMer6");

                    b.Property<string>("LendaMer7");

                    b.Property<string>("LendaPre1");

                    b.Property<string>("LendaPre2");

                    b.Property<string>("LendaPre3");

                    b.Property<string>("LendaPre4");

                    b.Property<string>("LendaPre5");

                    b.Property<string>("LendaPre6");

                    b.Property<string>("LendaPre7");

                    b.Property<string>("Nderrimi");

                    b.Property<string>("ProfaEnjt1");

                    b.Property<string>("ProfaEnjt2");

                    b.Property<string>("ProfaEnjt3");

                    b.Property<string>("ProfaEnjt4");

                    b.Property<string>("ProfaEnjt5");

                    b.Property<string>("ProfaEnjt6");

                    b.Property<string>("ProfaEnjt7");

                    b.Property<string>("ProfaHen1");

                    b.Property<string>("ProfaHen2");

                    b.Property<string>("ProfaHen3");

                    b.Property<string>("ProfaHen4");

                    b.Property<string>("ProfaHen5");

                    b.Property<string>("ProfaHen6");

                    b.Property<string>("ProfaHen7");

                    b.Property<string>("ProfaMar1");

                    b.Property<string>("ProfaMar2");

                    b.Property<string>("ProfaMar3");

                    b.Property<string>("ProfaMar4");

                    b.Property<string>("ProfaMar5");

                    b.Property<string>("ProfaMar6");

                    b.Property<string>("ProfaMar7");

                    b.Property<string>("ProfaMer1");

                    b.Property<string>("ProfaMer2");

                    b.Property<string>("ProfaMer3");

                    b.Property<string>("ProfaMer4");

                    b.Property<string>("ProfaMer5");

                    b.Property<string>("ProfaMer6");

                    b.Property<string>("ProfaMer7");

                    b.Property<string>("ProfaPre1");

                    b.Property<string>("ProfaPre2");

                    b.Property<string>("ProfaPre3");

                    b.Property<string>("ProfaPre4");

                    b.Property<string>("ProfaPre5");

                    b.Property<string>("ProfaPre6");

                    b.Property<string>("ProfaPre7");

                    b.HasKey("OrariId");

                    b.ToTable("Oraret");
                });

            modelBuilder.Entity("Domain.Paralelja", b =>
                {
                    b.Property<Guid>("ParaleljaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Gjenerata");

                    b.Property<string>("Klasa");

                    b.Property<string>("Kujdestari");

                    b.Property<int>("NrNxenesve");

                    b.Property<string>("Paralele");

                    b.HasKey("ParaleljaId");

                    b.ToTable("Paralelet");
                });

            modelBuilder.Entity("Domain.ParaleljaKlasa", b =>
                {
                    b.Property<Guid>("ParaleljaKlasaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmriKl");

                    b.Property<string>("EmriPar");

                    b.HasKey("ParaleljaKlasaId");

                    b.ToTable("ParaleletKlaset");
                });

            modelBuilder.Entity("Domain.Paraleljaa", b =>
                {
                    b.Property<Guid>("ParaleljaaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmriPar");

                    b.HasKey("ParaleljaaId");

                    b.ToTable("Paraleleet");
                });

            modelBuilder.Entity("Domain.Perioda", b =>
                {
                    b.Property<Guid>("PeriodaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Emri");

                    b.Property<string>("Fillimi");

                    b.Property<string>("Mbarimi");

                    b.HasKey("PeriodaId");

                    b.ToTable("Periodat");
                });

            modelBuilder.Entity("Domain.PlaniMesimor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("KriteriPlotsimit");

                    b.Property<string>("PlaniInfo");

                    b.Property<string>("klasa");

                    b.Property<string>("lenda");

                    b.HasKey("Id");

                    b.ToTable("PlanetMesimor");
                });

            modelBuilder.Entity("Domain.Prezantimi", b =>
                {
                    b.Property<Guid>("prezantimiId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("data");

                    b.Property<string>("kohezgjatja");

                    b.Property<string>("ora");

                    b.Property<string>("prezantimiInfo");

                    b.HasKey("prezantimiId");

                    b.ToTable("Prezantimet");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Emri");

                    b.Property<string>("Shteti");

                    b.HasKey("Id");

                    b.ToTable("Qytetet");
                });

            modelBuilder.Entity("Domain.Salla", b =>
                {
                    b.Property<Guid>("SallaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DataRezervimit");

                    b.Property<string>("Emri");

                    b.Property<int>("Kapaciteti");

                    b.Property<string>("OraRezervimit");

                    b.Property<string>("Statusi");

                    b.HasKey("SallaId");

                    b.ToTable("Sallat");
                });

            modelBuilder.Entity("Domain.Trajnim", b =>
                {
                    b.Property<Guid>("TrajnimId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Pershkrimi");

                    b.Property<string>("TrajnimEmri");

                    b.Property<int>("numriDiteve");

                    b.HasKey("TrajnimId");

                    b.ToTable("Trajnimet");
                });

            modelBuilder.Entity("Domain.Trip", b =>
                {
                    b.Property<Guid>("tripId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("date");

                    b.Property<string>("description");

                    b.Property<string>("name");

                    b.Property<string>("participants");

                    b.Property<string>("place");

                    b.Property<string>("price");

                    b.Property<string>("user");

                    b.HasKey("tripId");

                    b.ToTable("Trips");
                });

            modelBuilder.Entity("Domain.Vijushmeria", b =>
                {
                    b.Property<Guid>("VijushmeriaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Pjesmarrja");

                    b.Property<string>("Studenti");

                    b.HasKey("VijushmeriaId");

                    b.ToTable("Vijushmerit");
                });

            modelBuilder.Entity("Domain.VitiAkademik", b =>
                {
                    b.Property<Guid>("VitiAkademikId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("VitiAk");

                    b.HasKey("VitiAkademikId");

                    b.ToTable("VitetAkademike");
                });

            modelBuilder.Entity("Domain.Vleresimi", b =>
                {
                    b.Property<Guid>("VleresimiId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DataEVendosjes");

                    b.Property<string>("Lenda");

                    b.Property<int>("Nota");

                    b.Property<string>("OraEVendosjes");

                    b.HasKey("VleresimiId");

                    b.ToTable("Vleresimet");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Domain.AppRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Domain.AppUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Domain.AppUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Domain.AppRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.AppUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Domain.AppUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
