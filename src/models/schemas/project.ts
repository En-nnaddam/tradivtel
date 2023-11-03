import { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    region: { type: String, required: true },
    city: { type: String, required: true },
    siteCode: { type: String, required: true },
    siteName: { type: String, required: true },
    siteSituation: { type: String, required: true },
    x: { type: String, required: true },
    y: { type: String, required: true },
    infraProgram: { type: String, required: true },
    infraType: { type: String, required: true },
  },
  { timestamps: true }
);

export default projectSchema;
