import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const Home = () => {
  const bio = 'Lorem ipsum dolor sit amet consectetur adipsicing elit. Amet porro facero expedita ab atque a consectetur odit vel soluta itaque.'
  const user = {
    firstName: "Toba",
    middleName: "Rufus",
    lastName: "Ojo",
    photoUrl: "https://res.cloudinary.com/otrprojs/image/upload/v1674166017/hjr9plwezxpdncu5bwq5.jpg"
  }

  return (
    <Container fluid className='home'>
      <Row className='sectioned centered'>
        <Col className='image mb-5' md={12} lg={6}>
          <Image
            src= {user?.photoUrl}
            fluid
            thumbnail
            alt="Profile Photo"
          />
        </Col>
        <Col className='content mb-5' md={12} lg={6}>
          <h3>hi, I am {user?.lastName} {user?.firstName} {user?.middleName[0]}.</h3>
          <span>Engineer I</span>
          <p>{bio}</p>
          <Link to='about' className='Btn'>about me <i className="fas fa-user"></i></Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Home