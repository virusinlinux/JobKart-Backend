const dotenv = require("dotenv");

const Job = require("./models/job");
const User = require("./models/user");

const connectDB = require("./index.js");

dotenv.config();

connectDB();
const jobs = [
	{
		title: "John Cena",
		category: "ELECTRICIAN",
		location: "New York",
		description:
			"Experienced electrician needed for a construction project",
		offeredSalary: 55000,
		numberOfPositions: 2,
		recruiterEmailId: "john@gmail.com",
		recruiterPhoneNumber: "1234567890",
	},
	{
		title: "Joginder Rana",
		category: "PLUMBER",
		location: "Los Angeles",
		description: "Licensed plumber needed for a residential project",
		offeredSalary: 60000,
		numberOfPositions: 1,
		recruiterEmailId: "jane@gmail.com",
		recruiterPhoneNumber: "0987654321",
	},
	{
		title: "Barou Shihoue",
		category: "DRIVER",
		location: "Chicago",
		description: "CDL licensed driver needed for a delivery company",
		offeredSalary: 45000,
		numberOfPositions: 3,
		recruiterEmailId: "tony@gmail.com",
		recruiterPhoneNumber: "5678901234",
	},
	{
		title: "Rahul Kumar",
		category: "ELECTRICIAN",
		location: "New York",
		description:
			"Experienced electrician needed for a construction project",
		offeredSalary: 55000,
		numberOfPositions: 2,
		recruiterEmailId: "john@gmail.com",
		recruiterPhoneNumber: "1234567890",
	},
	{
		title: "Aadarsh Raj",
		category: "PLUMBER",
		location: "Los Angeles",
		description: "Licensed plumber needed for a residential project",
		offeredSalary: 60000,
		numberOfPositions: 1,
		recruiterEmailId: "jane@gmail.com",
		recruiterPhoneNumber: "0987654321",
	},
	{
		title: "Sarthak Kulkarni",
		category: "DRIVER",
		location: "Chicago",
		description: "CDL licensed driver needed for a delivery company",
		offeredSalary: 45000,
		numberOfPositions: 3,
		recruiterEmailId: "tony@gmail.com",
		recruiterPhoneNumber: "5678901234",
	},
	{
		title: "Rishav Singh",
		category: "MAID",
		location: "Houston",
		description: "Experienced maid needed for a residential house",
		offeredSalary: 25000,
		numberOfPositions: 1,
		recruiterEmailId: "susan@gmail.com",
		recruiterPhoneNumber: "2345678901",
	},
	{
		title: "Rittik Kesharwani",
		category: "SECURITY GUARD",
		location: "Philadelphia",
		description: "Licensed security guard needed for a commercial building",
		offeredSalary: 30000,
		numberOfPositions: 2,
		recruiterEmailId: "mike@gmail.com",
		recruiterPhoneNumber: "3456789012",
	},
	{
		title: "Ishika Sharma",
		category: "COOK",
		location: "Phoenix",
		description: "Experienced cook needed for a restaurant",
		offeredSalary: 35000,
		numberOfPositions: 1,
		recruiterEmailId: "lisa@gmail.com",
		recruiterPhoneNumber: "4567890123",
	},
	{
		title: "Nandita Verma",
		category: "PEON",
		location: "San Antonio",
		description: "Peon needed for a office",
		offeredSalary: 15000,
		numberOfPositions: 2,
		recruiterEmailId: "Amy@gmail.com",
		recruiterPhoneNumber: "5678901234",
	},
];

const users = [
	{
		username: "JohnSmith",
		phoneNumber: "1234567890",
		aadharNumber: "123456789012",
		category: "ELECTRICIAN",
		YOE: 5,
		otherSkills: "NA",
		currentLocation: "New York",
		availability: new Date("2022-02-01"),
		messageForRecruiter:
			"I am an experienced electrician with 5 years of experience",
	},
	{
		username: "JaneDoe",
		phoneNumber: "0987654321",
		aadharNumber: "234567890123",
		category: "PLUMBER",
		YOE: 3,
		otherSkills: "NA",
		currentLocation: "Los Angeles",
		availability: new Date("2022-03-01"),
		messageForRecruiter:
			"I am a licensed plumber with 3 years of experience",
	},
	{
		username: "TonyStark",
		phoneNumber: "5678901234",
		aadharNumber: "345678901234",
		category: "DRIVER",
		YOE: 2,
		otherSkills: "NA",
		currentLocation: "Chicago",
		availability: new Date("2022-04-01"),
		messageForRecruiter:
			"I am a CDL licensed driver with 2 years of experience",
	},
	{
		username: "AliceJohnson",
		phoneNumber: "2345678901",
		aadharNumber: "456789012345",
		category: "LABOUR",
		YOE: 4,
		otherSkills: "NA",
		currentLocation: "Houston",
		availability: new Date("2022-05-01"),
		messageForRecruiter:
			"I am a construction laborer with 4 years of experience",
	},
	{
		username: "BobWilliams",
		phoneNumber: "3456789012",
		aadharNumber: "567890123456",
		category: "MAID",
		YOE: 3,
		otherSkills: "NA",
		currentLocation: "Phoenix",
		availability: new Date("2022-06-01"),
		messageForRecruiter:
			"I am an experienced maid with 3 years of experience",
	},
	{
		username: "ChrisJones",
		phoneNumber: "4567890123",
		aadharNumber: "678901234567",
		category: "SECURITY GUARD",
		YOE: 2,
		otherSkills: "NA",
		currentLocation: "Philadelphia",
		availability: new Date("2022-07-01"),
		messageForRecruiter:
			"I am a licensed security guard with 2 years of experience",
	},
];

const importData = async () => {
	try {
		await Job.deleteMany();
		await User.deleteMany();

		await Job.create(jobs);
		await User.create(users);

		console.log("Data Imported!");
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

importData();
