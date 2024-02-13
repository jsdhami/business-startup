import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Course from '@/components/course/course'
import Feedback from '@/components/feedback/feedback'
import Fsection from '@/components/fsection/fsection'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Post from '@/components/posts/post'
import Service from '@/components/service/service'
import Testimonial from '@/components/testimonial/testimonial'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <>
    
    <Fsection/>
    {/* <Hero/> */}
    {/* <Course/> */}
    <About/>
    <Service/>
   <Testimonial/>

    </>
  )
}
