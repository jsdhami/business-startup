import { NextRequest, NextResponse } from "next/server";

const getData = fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => json);

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const api_key = searchParams.get('api_key')
    const data = await getData;
    
    if (api_key !== process.env.API_KEY) {
        return NextResponse.json({ error: 'Unauthorized' });
      }

      return NextResponse.json(data);
}

// http://localhost:3000/api/courses?api_key=gdhfjyytit56yrt5y5rtEGFJ
// access data through this url with this api key