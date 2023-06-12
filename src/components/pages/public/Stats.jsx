import React from 'react'
import { Col } from 'react-bootstrap'

const Stats = ({ stats }) => {
  return (
    <>
        <Col className="box">
            <h3>{Math.floor(stats?.ExperienceInYears)}+</h3>
            <p>years of experience</p>
        </Col>
        <Col className="box">
            <h3>{stats?.Projects}+</h3>
            <p>projects worked on</p>
        </Col>
        <Col className="box">
            <h3>{stats?.Skills}+</h3>
            <p>Programming Skills</p>
        </Col>
        <Col className="box">
            <h3>{stats?.Cerifications}+</h3>
            <p>Certifications</p>
        </Col>
    </>
  )
}

export default Stats