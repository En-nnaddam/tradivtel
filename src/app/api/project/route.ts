import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database";

export const GET = async () => {
  try {
    await connect();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    const project = await Project.create(req.body);
    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
};
