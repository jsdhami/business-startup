import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getProjects() {
 const projects = await prisma.projects.findMany()
 return projects
}
const getAllProjects = getProjects();
export const projects = getAllProjects;


async function createProject(id: string, v: number, title: string, description: string, link: string, image: string) {
  const project = await prisma.projects.create({
    data: {
      id: id,
      v: v,
      title: title,
      description: description,
      link: link,
      image: image
    }
  })
  return project
}
const createNewProject = createProject;
export const newCreateProject = createNewProject;


