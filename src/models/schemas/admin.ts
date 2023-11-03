import { cryptPassword, verifyPassword } from "@/lib/crypt";
import { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

adminSchema.pre("save", cryptPassword);
adminSchema.methods.verifyPassword = verifyPassword;

export default adminSchema;
