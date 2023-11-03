import { connect } from "@/lib/database";
import Project from "@/models/project";
import TParams from "@/types/idParams";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const project = await Project.findById(params.id);
    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const PUT = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    const body = await req.json();
    await Project.findByIdAndUpdate(params.id, body);
    return NextResponse.json("project updated");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
export const DELETE = async (req: NextRequest, { params }: TParams) => {
  try {
    await connect();
    await Project.findByIdAndDelete(params.id);
    return NextResponse.json("project deleted");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
