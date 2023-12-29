import connectDB from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import Post from "@/lib/schema/post";
connectDB();
export async function GET() {
    // const blogs = [
    //     { id: 1, title: 'Blog 1', description: 'This is blog 1' },
    //     { id: 2, title: 'Blog 2', description: 'This is blog second' },
    // ];
    // return NextResponse.json(blogs);
  const dataPost = await Post.find({});
  
  return NextResponse.json(dataPost);
}

export async function POST (request: NextRequest) {
    const payload = await request.json();
    const dataPost = new Post(payload);
    dataPost.save();
    return NextResponse.json(dataPost);
    }