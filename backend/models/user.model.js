import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		google_id: {
			type: String,
		},
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			minlength: 6,
		},
		gender: {
			type: String,
			default: "NA",
			enum: ["male", "female","NA"],
		},
		profilePic: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
