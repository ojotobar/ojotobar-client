import React from 'react'
import { Col } from 'react-bootstrap'
import { FaBriefcase } from 'react-icons/fa'
import { gradCapIconStyles, toYearAndMonth } from '../../../helpers/settings'

const Experience = ({ exp }) => {
  return (
    <Col className="box">
        <FaBriefcase style={gradCapIconStyles} size={10}/>
        { exp.endDate ?
            <span>{toYearAndMonth(exp?.startDate)} - {toYearAndMonth(exp?.endDate)}</span> :
            <span>{toYearAndMonth(exp?.startDate)} - Current</span>
        }
        <h3>{exp?.jobTitle} <span>@</span> {exp?.company}</h3>
        <p>{exp?.description}</p>
    </Col>
  )
}

export default Experience