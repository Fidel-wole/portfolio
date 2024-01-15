import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
const Headersocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/adewole-adewoye' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Fidel-wole' target="_blank" rel="noreferrer"><FaGithubAlt/></a>
        <a href='https://twitter.com/Fidel_builds' target="_blank" rel="noreferrer"><FiTwitter/></a>
    </div>
  )
}

export default Headersocials