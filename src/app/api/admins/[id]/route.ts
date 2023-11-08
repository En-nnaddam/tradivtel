import { connect } from "@/lib/database";
import Admin from "@/models/admin";
import TParams from "@/types/idParams";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const admin = await Admin.findById(params.id);
    return NextResponse.json(admin);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const PUT = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const body = await req.json();
    await Admin.findByIdAndUpdate(params.id, body);
    return NextResponse.json("admin updated");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const DELETE = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    await Admin.findByIdAndDelete(params.id);
    return NextResponse.json("admin deleted");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
