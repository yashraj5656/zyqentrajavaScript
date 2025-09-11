import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // 1️⃣ Connect to DB
    await connectDB();

    // 2️⃣ Parse body
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 3️⃣ Find user
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // 4️⃣ Validate password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // 5️⃣ Generate JWT
    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: "Server misconfigured: JWT_SECRET missing" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 6️⃣ Send response (exclude password)
    const { password: _, ...userData } = user.toObject();

    return NextResponse.json(
      {
        message: "Login success",
        user: { ...userData, subscribed: user.subscribed },
        token,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Unexpected login error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
