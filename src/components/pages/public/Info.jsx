import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toEmailLink } from '../../../helpers/settings'

const Info = ({ info, stats }) => {
  return (
    <>
        <Col className="box-container">
        <Col className='box'>
            <h3><span className='fw-bold'>name:</span> {info?.lastName} {info?.firstName} {info?.middleInitial}</h3>
            <h3><span className='fw-bold'>email:</span><a href={toEmailLink(info?.email)}> {info?.email}</a></h3>
            { info?.address ?
            <h3><span className='fw-bold'>address:</span> {info?.address}</h3> :
            <></>
            }
            <h3><span className='fw-bold'>experience:</span> {stats?.ExperienceString}</h3>
        </Col>
    </Col>
    <Link to='/' className='Btn'>Download CV <i className="fas fa-download"></i></Link>
    </>
  )
}

export default Info