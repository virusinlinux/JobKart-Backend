class UserController {
	constructor(userService) {
		this.userService = userService;
	}

	async getAllUsers(req, res, next) {
		console.log("controller to get All users");
		try {
			let allUsers = await this.userService.getAllUsers();
			return res.status(200).json({
				candidates: allUsers,
			});
		} catch (err) {
			console.log("ERROR IN getAllCandidates JOBCONTROLLER");
			return res.status(500).send(err);
		}
	}

	async createUser(req, res, next) {
		const {
			username,
			phoneNumber,
			aadharNumber,
			category,
			YOE,
			otherSkills,
			currentLocation,
			availability,
			messageForRecruiter,
		} = req.body;

		console.log("Reached controller");
		console.log(req.body);
		try {
			const user = await this.userService.createUser(
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
			return res.status(201).json({
				data: user,
			});
		} catch (err) {
			console.log("Error being sent from backend", err);
			return res.status(400).send(err);
		}
	}
}

module.exports = UserController;
