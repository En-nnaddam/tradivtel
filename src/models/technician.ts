import technicianSchema from "@/models/schemas/technician";
import { model, models } from "mongoose";

const Technician = models.Technician || model("Technician", technicianSchema);

export default Technician;
