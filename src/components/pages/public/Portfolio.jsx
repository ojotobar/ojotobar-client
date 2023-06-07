import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Container fluid className='portfolio px-3 pb-5'>
      <h1 className="heading"><span>my</span> works</h1>
      <Row className="box-container m-0">
        <Col className="box">
          <Image 
            src='https://res.cloudinary.com/otrprojs/image/upload/v1686094213/Screenshot_2023-06-07_002724_ngqkoc.png'
            fluid
            thumbnail
          />
          <Col className="content">
            <h3>Treasure Restaurant</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipsicing elit. Amet porro facero expedita ab atque a consectetur odit vel soluta itaque.</p>
            <Link to='/'>read more</Link>
          </Col>
        </Col>
        <Col className="box">
          <Image 
            src='https://res.cloudinary.com/otrprojs/image/upload/v1686094685/Screenshot_2023-06-07_003621_yigncb.png'
            fluid
            thumbnail
          />
          <Col className="content">
            <h3>Happy Consultants</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipsicing elit. Amet porro facero expedita ab atque a consectetur odit vel soluta itaque.</p>
            <Link to='/'>read more</Link>
          </Col>
        </Col>
        <Col className="box">
          <Image 
            src='https://res.cloudinary.com/otrprojs/image/upload/v1686094685/Screenshot_2023-06-07_003621_yigncb.png'
            fluid
            thumbnail
          />
          <Col className="content">
            <h3>Happy Consultants</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipsicing elit. Amet porro facero expedita ab atque a consectetur odit vel soluta itaque.</p>
            <Link to='/'>read more</Link>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio