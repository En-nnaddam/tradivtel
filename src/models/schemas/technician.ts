import { Schema } from "mongoose";

const technicianSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  speciality: { type: String, required: true },
  team: { type: String, required: true },
});

export default technicianSchema;
