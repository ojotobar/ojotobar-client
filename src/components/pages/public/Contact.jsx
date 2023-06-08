import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const styles = {
    fontSize: '3rem',
    color: 'crimson',
    paddingTop: '.5rem'
  }

  const btnStyles = {
    background: 'crimson',
    padding: '1rem 2rem',
    border: 'none',
    outline: 'none',
    fontSize: '1.7rem'
  }

  return (
    <Container fluid className='contact py-3'>
      <h1 className="heading">contact <span>me</span></h1>
      <Row className='Row px-5'>
        <Col className='mb-3 info-container' sm={12} md={6} lg={5}>
          <h1>get in touch</h1>
          <Col className="box-container">
            <Col className="box">
              <FaMapMarkerAlt style={styles}/>
              <Col className="info">
                <h3>address: </h3>
                <p>Lagos, Nigeria - 601232</p>
              </Col>
            </Col>
            <Col className="box">
              <FaEnvelope style={styles}/>
              <Col className="info">
                <h3>email: </h3>
                <p>ojotobar@gmail.com</p>
              </Col>
            </Col>
            <Col className="box">
              <FaPhone style={styles}/>
              <Col className="info">
                <h3>number: </h3>
                <p>+2348035222858</p>
              </Col>
            </Col>
          </Col>
          <Col className="share">
            <Link to='/'>
              <FaFacebookF />
            </Link>
            <Link to='/'>
              <FaTwitter />
            </Link>
            <Link to='/'>
              <FaLinkedinIn />
            </Link>
            <Link to='/'>
              <FaInstagram />
            </Link>
          </Col>
        </Col>
        { /* Form Section */}
        <Col className='mb-3' sm={12} md={6} lg={7}>
          <Form className=''>
            <Row className="">
              <Col className='mb-3 inputBox' xl={12}>
                <Form.Group>
                  <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder='Name'
                  />
                </Form.Group>
              </Col>
              <Col className='mb-3 inputBox' xl={12}>
                <Form.Group>
                  <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder='Email address'
                  />
                </Form.Group>
              </Col>
              <Col className='mb-3 inputBox' xl={12}>
                <Form.Group>
                  <Form.Control
                      type="phone"
                      id="phone"
                      name="phone"
                      required
                      placeholder='Phone number'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} className='mb-2 inputBox'>
                <Form.Control
                  required
                  as='textarea'
                  rows={5}
                  id="message"
                  name="message"
                  placeholder='Write your message'
                />
                <Form.Control.Feedback type="invalid">This field is required!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="">
              <Col xs={12} sm={6} md={6} lg={4}>
                <Button type="submit" className='w-100' style={btnStyles}>Send Message</Button>
              </Col>
              <Col xs={0} sm={6} md={6} lg={8}></Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact