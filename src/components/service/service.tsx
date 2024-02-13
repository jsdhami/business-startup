// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

// const features = [
//   {
//     name: 'Push to deploy',
//     description:
//       'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates',
//     description:
//       'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Simple queues',
//     description:
//       'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
//     icon: ArrowPathIcon,
//   },
//   {
//     name: 'Advanced security',
//     description:
//       'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
//     icon: FingerPrintIcon,
//   },
// ]

// export default function service() {
//   return (
//     <div className=" py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Everything you need to deploy your app
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
//             pulvinar et feugiat blandit at. In mi viverra elit nunc.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//             {features.map((feature) => (
//               <div key={feature.name} className="shadow-md rounded-md pl-16 ">
//                 <dt className="text-base font-semibold leading-7 text-gray-900">
//                   <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'

const service = () => {
  return (
  //   <section>
  //   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  //     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
  //       <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
  //         <img
  //           alt=""
  //           src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  //           className="absolute inset-0 h-full w-full object-cover"
  //         />
  //       </div>
  
  //       <div className="lg:py-24">
  //         <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
  
  //         <p className="mt-4 text-gray-600">
  //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
  //           eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
  //           quidem quam repellat.
  //         </p>
  
  //         <a
  //           href="#"
  //           className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
  //         >
  //           Get Started Today
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </section>

<section>
  <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
          iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
          minima aliquid tempora. Obcaecati, autem.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default service