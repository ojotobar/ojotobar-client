import React from 'react'
import { Col } from 'react-bootstrap'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <Col className="share">
        <a href='https://www.github.com/ojotobar'>
            <FaGithub />
        </a>
        <a href='https://wa.me/2348035222858'>
            <FaWhatsapp />
        </a>
        <a href='https://www.linkedin.com/in/toba-ojo-13439490'>
            <FaLinkedinIn />
        </a>
    </Col>
  )
}

export default SocialMedia