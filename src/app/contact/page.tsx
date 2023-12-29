import Contact from '@/components/contact/contact'
import { getServerSession } from "next-auth/next"
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const contact = async () => {
  const session = await getServerSession(options)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/contact')
}
  return (
    <>
   
    <div className='w-full justify-around justify-items-center items-center'>
    <Contact/>
    </div>

    </>
  )
}

export default contact