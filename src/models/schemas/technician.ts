import { cryptPassword, verifyPassword } from "@/lib/crypt";
import { Schema } from "mongoose";

const technicianSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    speciality: { type: String, required: true },
    team: { type: String, required: true },
  },
  { timestamps: true }
);

technicianSchema.pre("save", cryptPassword);
technicianSchema.methods.verifyPassword = verifyPassword;

export default technicianSchema;
