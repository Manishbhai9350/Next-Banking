import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({user,banks,transactions}:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col' >
            <div className='profile-banner'/>
            <div className="profile">
                <div className="profile-img">
                    <span className='text-5xl font-semibold text-blue-500'>{user.firstName[0]}</span>
                </div>
                <div className="profile-details">
                    <h1 className="profile-name">
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className='profile-email'>
                        {user.email}
                    </p>
                </div>
            </div>
        </section>
        <section className="banks">
            <div className="flex w-full justify-between items-center">
                <h2 className='header-2 text-xl font-semibold'>
                    My Banks
                </h2>
                <Link href='/'className='flex items-center gap-1' >
                    <Image
                    width={20}
                    height={20}
                    src='/icons/plus.svg'
                    alt='add bank'
                    />
                    <p className='text-14 font-semibold text-gray-600'>
                        Add Bank
                    </p>
                </Link>
            </div>
            {
                banks.length > 0 && (
                    <div className='flex flex-col flex-1 relative items-center justify-center'>
                        <div className="relative z-10">
                            <BankCard 
                            account={banks[0]}
                            userName={user.firstName + user.lastName}
                            showBalance={true}
                            key={banks[0].$id}
                            />
                        </div>
                        {
                            banks[1] && (
                                <div className='absolute right-0 top-4 z-0 w-[90%]'>
                                    <BankCard 
                                    account={banks[1]}
                                    userName={user.firstName + user.lastName}
                                    showBalance={true}
                                    key={banks[1].$id}
                                    />
                                </div>
                            )
                        }
                    </div>
                )
            }
        </section>
    </aside>
  )
}

export default RightSidebar