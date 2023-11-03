import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connect } from "@/lib/database";
import jwt from "jsonwebtoken"
import Technician from "@/models/technician";

const jwtSecret = process.env.JWT_SECRET!;
const expiresIn = 24 * 60 * 60; // 1d
const INCORRECT_CREDENTIALS_ERROR = "incorrect email or password";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    await connect();
    const technician = await Technician.findOne({ userName: body.email });
    if (!technician) throw new Error(INCORRECT_CREDENTIALS_ERROR);

    const isCorrectPassword = await technician.verifyPassword(body.password);
    if (!isCorrectPassword) throw new Error(INCORRECT_CREDENTIALS_ERROR);

    const token = jwt.sign({ technician: technician._id }, jwtSecret, {
      expiresIn,
    });

    const options = {
      name: "session",
      maxAge: expiresIn,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    };

    cookies().set(options);

    return NextResponse.json(technician, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

export const DELETE = async () => {
    cookies().delete("session")
    return NextResponse.json("Successful signout")
};
