import { logoutUser } from "@/lib/actions/user.action"
import Image from "next/image"
import { redirect } from "next/navigation"

const Footer = ({type = 'desktop',user}:any) => {
    const handleLogout = async () => {
        const response = await logoutUser()
    }
  return (
    <footer className='footer'>
        <div className={type == 'desktop' ? 'footer_name-mobile':'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>
        <div className={type == 'desktop' ? 'footer_email-mobile':'footer_email'}>
            <h1 className="text-14 truncate font-semibold text-gray-600">
                {user?.name}
            </h1>
            <p className='text-12 truncate font-normal text-gray-600'>
                {user?.email}
            </p>
        </div>
        <div
        onClick={handleLogout}
        className="logout-icon">
            <Image
            src='/icons/logout.svg'
            width={25}
            height={25}
            alt='logout'
            />
        </div>
    </footer>
  )
}

export default Footer