create database smsDB

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

 