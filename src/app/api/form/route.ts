import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import formdata from "@/lib/schema/form";
connectDB();
export async function GET () {
  const formData = await formdata.find({});
  
  return NextResponse.json(formData);
}

export async function POST (request: NextRequest) {
    const payload = await request.json();
    const formData = new formdata(payload);
    formData.save();
    return NextResponse.json(formData);
  }