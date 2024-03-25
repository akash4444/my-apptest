import { NextResponse } from "next/server";
import { UserModel } from "@/lib/Model/user";
import { DBConnect } from "../dbconnect";
import bcryptjs from "bcryptjs";

DBConnect();
export async function POST(request) {
  const payload = await request.json();

  const { email, password } = payload;

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials", status: 409 },
        { status: 409 }
      );
    } else {
      const isValidPassword = await bcryptjs.compare(password, user.password);
      if (!isValidPassword) {
        return NextResponse.json(
          { message: "Invalid credentials", status: 409 },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { message: "success", status: 200, role: user.role },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong.", status: 500 },
      { status: 500 }
    );
  }
}
