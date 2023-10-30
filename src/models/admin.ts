import { model, models } from "mongoose";
import adminSchema from "./schemas/admin";

const Admin = models.Admin || model("Admin", adminSchema);

export default Admin;
