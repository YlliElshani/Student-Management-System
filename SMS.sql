
create database smsDB
use smsDB

create table Useri(
	UserID int identity(1,1) primary key,
	FirstName varchar (50),
	LastName varchar (50),
	Gender varchar (7),
	Age int,
	PhoneNumber varchar(100),
	Email varchar (255)
)

create table Administratori (
	AdministratoriID int identity(1,1) primary key,
	Address varchar (255),
	Birthday varchar (70),
	Hometown varchar (255),
	Useri int,
	foreign key (Useri) references Useri(UserID)
)

create table Student(
	StudentID int identity(1,1) primary key,
	Birthday varchar (70),
	ParentName varchar (50),
	Hometown varchar (255),
	Address varchar(200),
	Useri int,
	foreign key (Useri) references Useri(UserID)
)

create table Prindi(
	PrindiID int identity(1,1) primary key,
	Useri int,
	foreign key (Useri) references Useri(UserID)
)

create table Nota(
	NotaID int identity(1,1) primary key,
	Grade varchar (10)
)

create table Profesori(
	ProfesoriID int identity(1,1) primary key,
	GradaAkademike varchar(255),
	Studimi int,
	Useri int,
	Foreign key (Studimi) references Studimet(StudimiID),
	foreign key (Useri) references Useri(UserID)
)

create table Studimet(
	StudimiID int identity(1,1) primary key,
	Fillor varchar(255),
	IMesem varchar(255),
	Universitar varchar(255)
)

create table Lenda(
	LendaID int identity(1,1) primary key,
	Lenda varchar(255),
	Profesori int,
	foreign key (Profesori) references Profesori(ProfesoriID)
)

create table Vleresimi(
	VleresimiID int identity(1,1) primary key,
	Lenda int,
	Nota int,
	foreign key (Lenda) references 
)

