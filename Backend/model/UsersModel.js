import mongoose from "mongoose";
import { userSchema } from "../schemas/UserSchema.js";

const UsersModel = mongoose.model("user", userSchema);

export { UsersModel };
