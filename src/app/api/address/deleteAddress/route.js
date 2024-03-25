import { NextResponse } from "next/server";
import { UserModel } from "@/lib/Model/user";
import { DBConnect } from "../../dbconnect";

DBConnect();
export async function POST(request) {
  const payload = await request.json();

  const { userId, addressId } = payload;

  try {
    const user = await UserModel.findOne({ email: userId });
    if (user) {
      const fIndex = user.address.findIndex(
        (adr) => adr._id.toString() === addressId
      );

      user.address.splice(fIndex, 1);
      await user.save();

      return NextResponse.json(
        { message: "Address deleted succussfully.", status: 200 },
        { status: 200 }
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Something went wrong.", status: 500 },
      { status: 500 }
    );
  }
}
