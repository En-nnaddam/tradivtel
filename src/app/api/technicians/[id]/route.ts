import { connect } from "@/lib/database";
import Technician from "@/models/technician";
import TParams from "@/types/idParams";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const technician = await Technician.findById(params.id);
    return NextResponse.json(technician);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const PUT = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const body = await req.json();
    await Technician.findByIdAndUpdate(params.id, body);
    return NextResponse.json("technician updated");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const DELETE = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    await Technician.findByIdAndDelete(params.id);
    return NextResponse.json("technician deleted");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
