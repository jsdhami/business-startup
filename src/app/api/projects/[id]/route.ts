import connectDB from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import Project from "@/lib/schema/project";
connectDB();

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
     //  console.log(params.id);
     const dataProject = await Project.findByIdAndDelete(params.id);
     return NextResponse.json(dataProject);

   
  }

export async function GET (request: NextRequest, { params }: { params: { id: string } }) {
    const dataProject = await Project.findById(params.id);
    return NextResponse.json(dataProject);
}