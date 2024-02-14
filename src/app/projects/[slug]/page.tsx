import React from 'react'

async function project({ params }: { params: { slug: string } }) {
  // https://jsonplaceholder.typicode.com/posts
  const projects = await fetch('http://127.0.0.1:3000/api/projects').then((res) => res.json())
  const project = await projects.filter((post: { id: number }) => post.id === Number(params.slug))[0]
  // const project = await projects.filter((post: { title: string }) => post.title === params.slug)[0];

  console.log(project)

  return (
    <div>project{project.description}</div>
  )
}

export default project