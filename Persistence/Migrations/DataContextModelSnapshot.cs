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

            modelBuilder.Entity("Domain.PlaniMesimor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("dataShenimit");

                    b.Property<string>("kriteriSuksesit");

                    b.Property<string>("planiInfo");

                    b.HasKey("Id");

                    b.ToTable("PlaniMesimor");
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

                    b.HasKey("tripId");

                    b.ToTable("Trips");
                });

            modelBuilder.Entity("Domain.Vijushmeria", b =>
                {
                    b.Property<Guid>("VijushmeriaID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Pjesmarrja");

                    b.Property<string>("Studenti");

                    b.HasKey("VijushmeriaID");

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
