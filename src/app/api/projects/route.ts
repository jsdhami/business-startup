// import { NextResponse } from "next/server";

// export function GET() {
//  const projects = [
//     {
//       "id": 1,
//       "title": "Project 1",
//       "description": " lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. ",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/1"
//     },
//     {
//       "id": 2,
//       "title": "Project 2",
//       "description": "This is the description for Project 2.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/2"
//     },
//     {
//       "id": 3,
//       "title": "Project 3",
//       "description": "This is the description for Project 3.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/3"
//     },
//     {
//       "id": 4,
//       "title": "Project 4",
//       "description": "This is the description for Project 4.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/4"
//     },
//     {
//       "id": 5,
//       "title": "Project 5",
//       "description": "This is the description for Project 5.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/5"
//     },
//     {
//       "id": 6,
//       "title": "Project 6",
//       "description": "This is the description for Project 6.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/6"

//     },
//     {
//       "id": 7,
//       "title": "Project 7",
//       "description": "This is the description for Project 7.",
//       "image": "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
//       "link": "http://127.0.0.1:3000/projects/7"
//     }
//   ];
//     return NextResponse.json(projects);   
// }




import connectDB from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import Project from "@/lib/schema/project";
connectDB();
export async function GET() {
  const dataProject = await Project.find({});
  return NextResponse.json(dataProject);
}

export async function POST (request: NextRequest) {
    // const payload = await request.json();
    // const dataProject = new Project(payload);
    const dataProject = new Project({
        title: "Project 1",
        description: " lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. ",
        image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
        link: "http://hrl.com"
    });
    dataProject.save();
    return NextResponse.json(dataProject);
    }

export async function DELETE(request: NextRequest) {
    // const payload = await request.json();
    // const dataProject = await Project.findByIdAndDelete(payload.id);
    const dataProject = await Project.findByIdAndDelete("65cb5d45081dc864ef52e098");
    return NextResponse.json(dataProject);
  }

export async function PUT(request: NextRequest) {
    // const payload = await request.json();
    // const dataProject = await Project.findByIdAndUpdate
    // (payload.id, payload, { new: true });
    const dataProject = await Project.findByIdAndUpdate("65cb5d45081dc864ef52e098", {title: "Project 1"}, { new: true });
    return NextResponse.json(dataProject);
  }