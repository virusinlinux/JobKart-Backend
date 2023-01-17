class UserService {
	constructor(userManager) {
		this.userManager = userManager;
	}
	async getAllUsers() {
		try {
			let allUsers = await this.userManager.getAllUsers();
			return allUsers;
		} catch (err) {
			console.log("ERROR IN getAllCandidates JOBSERVICE");
			throw err;
		}
	}
  
	async createUser(
		username,
		phoneNumber,
		aadharNumber,
		category,
		YOE,
		otherSkills,
		currentLocation,
		availability,
		messageForRecruiter
	) {
		console.log("Reached service", availability);
		try {
			let res = await this.userManager.createUser(
				username,
				phoneNumber,
				aadharNumber,
				category,
				YOE,
				otherSkills,
				currentLocation,
				availability,
				messageForRecruiter
			);
			console.log("Received from manager in service ", res);
			return res;
		} catch (err) {
			console.log("Received ERROR from manager in service ", err);
			throw err;
		}
	}
}
module.exports = UserService;
