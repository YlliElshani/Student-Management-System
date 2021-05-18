create database smsDB
use smsDB

create table Useri(
	UserID int identity(1,1) primary key,
	FirstName varchar(100),
	LastName varchar(100),
	Gender varchar(10),
	Age int,
	PhoneNumber varchar(100),
	Email varchar(200),
	Address varchar(200)
)

create table Administratori(
	AdministratoriID int identity(1,1) primary key,
	Birthday varchar(70),
	Hometown varchar(100),
	Useri int,
	foreign key (Useri) references Useri(UserID)
)

create table Prindi(
	PrindiID int identity(1,1) primary key,
	Useri int,
	foreign key (Useri) references Useri(UserID)
)


create table Student(
	StudentID int identity(1,1) primary key,
	Birthday varchar(70),
	Hometown varchar(100),
	VitiStudimit int,
	Drejtimi varchar(150),
	Paralelja varchar(15),
	Useri int,
	foreign key (Useri) references Useri(UserID)
)

create table Nota(
	NotaID int identity(1,1) primary key,
	Grade varchar(10)
)

create table Studimet(
	StudimiID int identity(1,1) primary key,
	Fillor varchar(255),
	IMesem varchar(255),
	Universitar varchar(255)
)

create table Profesori(
	ProfesoriID int identity(1,1) primary key,
	GradaAkademike varchar(50),
	Studimi int, 
	Useri int,
	foreign key (Studimi) references Studimet(StudimiID),
	foreign key (Useri) references Useri(UserID)
)


create table Lenda(
	LendaID int identity(1,1) primary key,
	Lenda varchar(255),
	Profesori int,
	foreign key (Profesori) references Profesori(ProfesoriID)
)


create table Vleresimi (
	VleresimiID int identity(1,1) primary key,
	Nota int,
	Lenda int,
	Studenti int,
	foreign key (Nota) references Nota(NotaID),
	foreign key (Lenda) references Lenda(LendaID),
	constraint Studenti_FK foreign key (Studenti) references Student(StudentID),
)

create table Vijueshmeria(
	VijueshmeriaID int identity(1,1) primary key,
	Vijueshmeria int,
	Studenti int,
	foreign key (Studenti) references Student(StudentID)
)


create table Detyra(
	DetyraID int identity(1,1) primary key,
	Titulli varchar(200),
	Piket float,
	Lenda int,
	Nota int,
	foreign key (Lenda) references Lenda(LendaID),
	foreign key (Nota) references Nota(NotaID)
)

create table Orari(
	OrariID int identity(1,1) primary key,
	Dita varchar(60),
	FillimiOres varchar(30),
	MbarimiOres varchar (30),
	Lenda int,
	foreign key (Lenda) references Lenda(LendaID)
)