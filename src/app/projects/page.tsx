import { getServerSession } from "next-auth/next"
import { options } from '../api/auth/[...nextauth]/options';
const allProjects = fetch('http://localhost:3000/api/projects').then((res) => res.json())
const projects = async () => {
const project = await allProjects;
const session = await getServerSession(options)

// console.log(project)
  return (
    <>


    
     {/* <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {project.map((project:any) => (
            <div key={project.id} className="group bg-red-300 rounded-md py-5 px-5 ">
              <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={project.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            
              
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={project.link}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{project.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  */}
    </>
  )
}

export default projects