import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // ✅ Ensure DB is connected
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ Check for existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ Hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ Create user
    const user = await User.create({
      email,
      password: hashed,
      subscribed: false,
    });

    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: "Server misconfigured: JWT_SECRET missing" },
        { status: 500 }
      );
    }

    // ✅ Generate JWT
    const token = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      {
        message: "Signup success",
        user: {
          id: user._id,
          email: user.email,
          subscribed: user.subscribed,
        },
        token,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Signup API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
