// import projects from "../graphql/services/projects";
import { projects } from "../graphql/services/projects";
import { newCreateProject } from "../graphql/services/projects";

// import createProject from "../graphql/services/projects";
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
  Query: {
    books: () => books,
    projects: () => projects,
  },
  Mutation: {
    createProject: async (_: any, { id, v, title, description, link, image }: any) => {
      return newCreateProject(id, v, title, description, link, image);
    },

    
  },
  };
  
export default resolvers;
  