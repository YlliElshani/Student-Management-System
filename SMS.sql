create database smsDB
use smsDB

create table Student (
	StudentID int identity(1,1) primary key,
	FirstName varchar (50),
	LastName varchar (50),
	Gender varchar (7),
	Age int,
	Address varchar (255),
	PhoneNumber varchar(100),
	Email varchar (255),
	Birthday varchar (70),
	ParentName varchar (50),
	Hometown varchar (255)
)

insert into Student values ('Hysnije', 'Zllanoga', 'F', 20, 'Mizair Isma', '049604201', 'hysnijee.zllanoga@gmail.com', '03-06-2001', 'Lulzim', 'Rahovec')
 select * from Student

 create table Administratori (
	AdministratoriID int identity(1,1) primary key,
	FirstName varchar (50),
	LastName varchar (50),
	Gender varchar (7),
	Age int,
	Address varchar (255),
	PhoneNumber varchar(100),
	Email varchar (255),
	Birthday varchar (70),
	ParentName varchar (50),
	Hometown varchar (255)
 )
 insert into Administratori values('Alban', 'Rexhepi', 'M', 36, 'Muharrem Fejza', '049564428', 'alban.rexhepi@gmail.com', '04-04-1985', 'Bashkim', 'Prishtine')
 select * from Administratori

 create table Nota(
	NotaID int identity(1,1) primary key,
	Grade varchar (10)
 )

 insert into Nota values ('A')
 select * from Nota