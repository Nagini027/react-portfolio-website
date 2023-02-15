import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/butterfly.png'
// import HeaderSocial from './headersocials'
import {BiChevronDown} from 'react-icons/bi'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>NagaLakshmi</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA / >
        {/* <HeaderSocial /> */}
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
        <a href='#contact' className='scroll__down'><BiChevronDown/></a>
      </div>
    </header>
  )
}

export default header