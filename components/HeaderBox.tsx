import React from 'react'

const HeaderBox = ({user,title,type = 'greeting',subtext}:HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {
                type === 'greeting' &&
                <span className='header-box-greeting text-bankGradient'>
                   &nbsp; {user?.name || 'Guest'}
                </span>
            }
        </h1>
        <p className='header-box-subtext'>
            {subtext}
        </p>
    </div>
  )
}

export default HeaderBox