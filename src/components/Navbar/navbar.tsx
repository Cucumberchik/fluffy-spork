import EmailIcon from '@/icons/email'
import InstagramIcon from '@/icons/instagram'
import PhoneIcon from '@/icons/phone'
import twoGis from "@/assets/2gis.png"

import "./index.scss"
import React, { FC, ReactNode } from 'react'
 

const Navbar:FC = ():ReactNode => {
  return (
    <header>
        <div className="container">
            <div className="_contacts">
                <nav className='left'>
                  <a href='tel:+996 501 06 55 05' >
                    <PhoneIcon />
                    +996 501 06 55 05
                  </a>
                  <a href="mailto: bono51@gmail.com">
                    <EmailIcon />
                    bono51@gmail.com"
                  </a>
                </nav>
                <nav className='right'>
                  <a href="instagram">
                    <InstagramIcon />
                    Instagram
                  </a>
                  <a href="2gis">
                    <img src={twoGis} alt="2Gis" />
                    2Gis
                  </a>
                  <button title="Заказать">Заказать</button>
                </nav>
            </div>
        </div>
    </header>
  )
}
export const SideBaar:FC = ():ReactNode => {
  return(
  <nav id='sidebar'>
    <div className="container">
      <div className="logo_company">
        <h1>bono</h1>
      </div>
      <div className="navigation">
        <a href="/">Главная</a>
        <a href="/menu">Меню</a>
        <a href="/delivery">Доставка</a>
        <a href="/about-us">О нас</a>
        <a href="/contacts">Контакты</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar