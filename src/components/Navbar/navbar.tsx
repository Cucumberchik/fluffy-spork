import PhoneIcon from '@/icons/phone'
import React from 'react'
 

const Navbar:React.FC = ():React.ReactNode => {
  return (
    <header>
        <div className="container">
            <div className="_contacts">
                <a href='tel:+996 501 06 55 05' >
                <PhoneIcon />
                +996 501 06 55 05
                </a>
            </div>
        </div>
    </header>
  )
}

export default Navbar