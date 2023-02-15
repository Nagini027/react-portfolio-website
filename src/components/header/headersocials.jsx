import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'

const headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
        <a href="https://gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default headersocials