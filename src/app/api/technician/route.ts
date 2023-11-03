import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database";
import Technician from "@/models/technician";

export const GET = async () => {
  try {
    await connect();
    const technicians = await Technician.find();
    return NextResponse.json(technicians);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    const technician = await Technician.create(req.body);
    return NextResponse.json(technician);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
};
