import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database";
import Admin from "@/models/admin";

export const GET = async () => {
  try {
    await connect();
    const admins = await Admin.find();
    return NextResponse.json(admins);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    const admin = await Admin.create(req.body);
    return NextResponse.json(admin);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
};
