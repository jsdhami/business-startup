import { getServerSession } from "next-auth/next"
import { options } from '../api/auth/[...nextauth]/options';
import Image from "next/image";
import Link from "next/link";
const allProjects = fetch('http://127.0.0.1:3000/api/projects').then((res) => res.json())
const projects = async () => {
const project = await allProjects;
const session = await getServerSession(options)
// console.log(project)
  return (
    <>
 {/* {session?.user ? (
    <div>
      <h1>Hi {session.user.name}</h1>
      <p>{session.user.email}</p>
      <Image src={session.user.image ?? ""} alt="user" width={100} height={100} />
      <p>Here are some projects you might be interested in</p>
    </div>
  ) : ( 
    <div>
      <h1>Hi there</h1>
      <p>Here are some projects you might be interested in</p>
    </div>
  ) 
  }    */}
<div className="px-5 py-5 grid grid-cols-4 gap-4">
{project.map((project:any) => (
  <div key={project.id} >
  <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
  <Image src={project.image} alt="project" width={500} height={500} className="h-56 w-full object-cover" />
  <div className="p-4 sm:p-6">
    <Link href={project.link}>
      <h3 className="text-lg font-medium text-gray-900">
        {project.title}
      </h3>
    </Link>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {project.description}
    </p>

    <Link href={project.link} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>

</article>
  </div>
 ))}
 
</div>

   </>
  )
}

export default projects