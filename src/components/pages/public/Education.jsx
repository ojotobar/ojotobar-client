import React from 'react'
import { fullYear, gradCapIconStyles } from '../../../helpers/settings'
import { FaGraduationCap } from 'react-icons/fa'
import { Col } from 'react-bootstrap'

const Education = ({ edu }) => {
  return (
    <Col className="box">
        <FaGraduationCap style={gradCapIconStyles}/>
        <span>{fullYear(edu?.startDate)} - {fullYear(edu?.endDate)}</span>
        <h3>{edu?.qualificationObtained}</h3>
        <p>{edu?.institution}</p>
    </Col>
  )
}

export default Education