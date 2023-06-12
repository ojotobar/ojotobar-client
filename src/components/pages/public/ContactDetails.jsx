import React from 'react'
import { Col } from 'react-bootstrap'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { smIconStyles, toEmailLink, toPhoneLink } from '../../../helpers/settings'

const ContactDetails = ({ info }) => {
  return (
    <>
        <Col className="box-container">
            <Col className="box">
                <FaMapMarkerAlt style={smIconStyles}/>
                <Col className="info">
                <h3>address: </h3>
                <p className='add'>{info?.address}</p>
                </Col>
            </Col>
            <Col className="box">
                <FaEnvelope style={smIconStyles}/>
                <Col className="info">
                <h3>email: </h3>
                <p><a href={toEmailLink(info?.email)}>{info?.email}</a></p>
                </Col>
            </Col>
            <Col className="box">
                <FaPhone style={smIconStyles}/>
                <Col className="info">
                <h3>number: </h3>
                <p><a href={toPhoneLink(info?.phone)}>{info?.phone}</a></p>
                </Col>
            </Col>
        </Col>
    </>
  )
}

export default ContactDetails