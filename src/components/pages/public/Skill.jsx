import React from 'react'
import { Col, Image } from 'react-bootstrap'

const Skill = ({ skill }) => {
  return (
    <Col className="box">
        <Image 
            src={skill?.iconUrl}
            fluid
            thumbnail
        />
        <h3>{skill?.skill}</h3>
    </Col>
  )
}

export default Skill