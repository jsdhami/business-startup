import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import formdata from "@/lib/schema/form";
connectDB();
export async function GET() {
  const dataForm = await formdata.find({});
  return NextResponse.json(dataForm);
}
export async function POST (request: NextRequest) {
    const payload = await request.json();
    const formData = new formdata(payload);
    formData.save();
    return NextResponse.json(formData);
  }
