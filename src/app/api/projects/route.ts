import { NextResponse } from "next/server";

export function GET() {
 const projects = [
    {
      "id": 1,
      "title": "Project 1",
      "description": "This is the description for Project 1.",
      "image": "project1.jpg",
      "link": "https://example.com/project1"
    },
    {
      "id": 2,
      "title": "Project 2",
      "description": "This is the description for Project 2.",
      "image": "project2.jpg",
      "link": "https://example.com/project2"
    },
    {
      "id": 3,
      "title": "Project 3",
      "description": "This is the description for Project 3.",
      "image": "project3.jpg",
      "link": "https://example.com/project3"
    },
    {
      "id": 4,
      "title": "Project 4",
      "description": "This is the description for Project 4.",
      "image": "project4.jpg",
      "link": "https://example.com/project4"
    },
    {
      "id": 5,
      "title": "Project 5",
      "description": "This is the description for Project 5.",
      "image": "project5.jpg",
      "link": "https://example.com/project5"
    },
    {
      "id": 6,
      "title": "Project 6",
      "description": "This is the description for Project 6.",
      "image": "project6.jpg",
      "link": "https://example.com/project6"

    },

    {
      "id": 7,
      "title": "Project 7",
      "description": "This is the description for Project 7.",
      "image": "project7.jpg",
      "link": "https://example.com/project7"

    },

    {
      "id": 8,
      "title": "Project 8",
      "description": "This is the description for Project 8.",
      "image": "project8.jpg",
      "link": "https://example.com/project8"

    },

    {
      "id": 9,
      "title": "Project 9",
      "description": "This is the description for Project 9.",
      "image": "project9.jpg",
      "link": "https://example.com/project9"

    },

    {
      "id": 10,
      "title": "Project 10",
      "description": "This is the description for Project 10.",
      "image": "project10.jpg",
      "link": "https://example.com/project10"

    },

    {
      "id": 11,
      "title": "Project 11",
      "description": "This is the description for Project 11.",
      "image": "project11.jpg",
      "link": "https://example.com/project11"

    },

    {
      "id": 12,
      "title": "Project 12",
      "description": "This is the description for Project 12.",
      "image": "project12.jpg",
      "link": "https://example.com/project12"

    },

    {
      "id": 13,
      "title": "Project 13",
      "description": "This is the description for Project 13.",
      "image": "project13.jpg",
      "link": "https://example.com/project13"

    },

    {
      "id": 14,
      "title": "Project 14",
      "description": "This is the description for Project 14.",
      "image": "project14.jpg",
      "link": "https://example.com/project14"

    },

    {
      "id": 15,
      "title": "Project 15",
      "description": "This is the description for Project 15.",
      "image": "project15.jpg",
      "link": "https://example.com/project15"

    },

    {
      "id": 16,
      "title": "Project 16",
      "description": "This is the description for Project 16.",
      "image": "project16.jpg",
      "link": "https://example.com/project16"
    }

  ];
    return NextResponse.json(projects);   
}