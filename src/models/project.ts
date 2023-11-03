import projectSchema from "@/models/schemas/project";
import { model, models } from "mongoose";

const Project = models.Project || model("Project", projectSchema)

export default Project