import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const styles = {
    height: '4.5rem',
    width: '4.5rem',
    lineHeight: '4.5rem',
    fontSize: '1.7rem',
    borderRadius: '50%',
    background: 'crimson',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top:'0',
    left: '-2.5rem'
  }

  return (
    <Container fluid className='about py-5'>
      { /* About Section */ }
      <h1 className="heading"> about <span>me</span></h1>
      <Row className='Row'>
        <Col className='info p-5'>
          <h1>personal info</h1>
          <Col className="box-container">
            <Col className='box'>
              <h3><span>name:</span> Ojo Toba R.</h3>
              <h3><span>email:</span> ojotobar@gmail.com</h3>
              <h3><span>address:</span> Lagos, Nigeria - 601232</h3>
              <h3><span>experience:</span> 2 years</h3>
            </Col>
          </Col>
          <Link to='/' className='Btn'>Download CV <i className="fas fa-download"></i></Link>
        </Col>
        <Col className="count-container p-5">
          <Col className="box">
            <h3>2+</h3>
            <p>years of experience</p>
          </Col>
          <Col className="box">
            <h3>10+</h3>
            <p>projects worked on</p>
          </Col>
          <Col className="box">
            <h3>15+</h3>
            <p>Programming Skills</p>
          </Col>
          <Col className="box">
            <h3>3+</h3>
            <p>Certifications</p>
          </Col>
        </Col>
      </Row>
      { /* Skills Section */ }
      <Row className='skills'>
        <h1 className="heading"><span>my </span>skills</h1>
        <Row className="box-container m-0 px-5">
          <Col className="box">
            <Image 
              src='https://w7.pngwing.com/pngs/7/894/png-transparent-csharp-plain-logo-icon-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>C#</h3>
          </Col>
          <Col className="box">
            <Image
              src='https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg'
              fluid
              thumbnail 
            />
            <h3>JavaScript</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://estradaci.com/wp-content/uploads/2019/04/asp-net-core-logo.png'
              fluid
              thumbnail
            />
            <h3>ASP.NET Core</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>NodeJS</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://e7.pngegg.com/pngimages/359/101/png-clipart-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>ReactJS</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHFM1r6hvaDtao75jk35o3FDn4ofAIazuEIMRAJhl&s'
              fluid
              thumbnail
            />
            <h3>Hangfire</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://assets.stickpng.com/images/584830b5cef1014c0b5e4a9c.png'
              fluid
              thumbnail
            />
            <h3>Redis</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>MongoDB</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://thumbnail.imgbin.com/21/11/12/imgbin-mysql-logo-database-join-portable-network-graphics-table-fYjBwJzJKBWt9RtriTD0EiXZU_t.jpg'
              fluid
              thumbnail
            />
            <h3>MySQL</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://hub.meltano.com/assets/logos/extractors/mssql.png'
              fluid
              thumbnail
            />
            <h3>SQL Server</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://e7.pngegg.com/pngimages/630/547/png-clipart-kafka-vertical-logo-tech-companies-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>Kafka</h3>
          </Col>
          <Col className="box">
            <Image 
              src='https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png'
              fluid
              thumbnail
            />
            <h3>AngularJS</h3>
          </Col>
        </Row>
      </Row>
      { /* Education Section */ }
      <Row className="education">
        <h1 className="heading"><span>my</span> Education</h1>
        <Row className="box-container m-0 px-5">
          <Col className="box">
            <FaGraduationCap style={styles}/>
            <span>2006 - 2009</span>
            <h3>Bachelor of Science, Economics</h3>
            <p>University of Ilorin. Ilorin. Nigeria.</p>
          </Col>
          <Col className="box">
            <FaGraduationCap style={styles}/>
            <span>1990 - 2002</span>
            <h3>Senior School Certificate</h3>
            <p>Government Secondary School. Jebba. Nigeria.</p>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default About