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

            modelBuilder.Entity("Domain.Detyra", b =>
                {
                    b.Property<Guid>("DetyraId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DetyraEmri");

                    b.Property<string>("Pershkrimi");

                    b.HasKey("DetyraId");

                    b.ToTable("Detyrat");
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

            modelBuilder.Entity("Domain.Nota", b =>
                {
                    b.Property<Guid>("NotaId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Grade");

                    b.Property<string>("Lenda");

                    b.HasKey("NotaId");

                    b.ToTable("Notat");
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

            modelBuilder.Entity("Domain.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<int>("Age");

                    b.Property<string>("City");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Role");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("Domain.Parent", b =>
                {
                    b.HasBaseType("Domain.User");

                    b.Property<int>("nrKidsEnrolled");

                    b.HasDiscriminator().HasValue("Parent");
                });

            modelBuilder.Entity("Domain.Profesor", b =>
                {
                    b.HasBaseType("Domain.User");

                    b.Property<string>("GradaAkademike");

                    b.Property<string>("Studimet");

                    b.HasDiscriminator().HasValue("Profesor");
                });

            modelBuilder.Entity("Domain.Student", b =>
                {
                    b.HasBaseType("Domain.User");

                    b.Property<string>("FieldOfStudy");

                    b.Property<string>("Grade");

                    b.Property<Guid>("StudentId");

                    b.Property<int>("YearOfStudy");

                    b.HasDiscriminator().HasValue("Student");
                });

            modelBuilder.Entity("Domain.obj.Admin", b =>
                {
                    b.HasBaseType("Domain.User");

                    b.Property<string>("titulliZyrtar");

                    b.Property<int>("viteEksperienc");

                    b.HasDiscriminator().HasValue("Admin");
                });
#pragma warning restore 612, 618
        }
    }
}
