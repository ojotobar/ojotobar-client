import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';
import { useGetUserProjectsQuery } from '../../../features/api/projectApi';
import CustomSpinner from '../../common/CustomSpinner';
import { Alert } from 'react-bootstrap';

const Portfolio = () => {
  const { userId } = useSelector((state) => state.auth);
  const { data: projects, isLoading, isError } = useGetUserProjectsQuery(userId);

  return (
    <Container fluid className='portfolio px-3 py-5'>
      <h1 className="heading"><span>my</span> works</h1>
      <Row className="box-container m-0">
        { isLoading ? 
          <CustomSpinner /> :
          isError ?
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Error</Alert.Heading>
            <p>There was an error loading resources. Please reload.</p>
          </Alert> :
          <>
            { projects && projects.map(proj => (
              <Col key={proj?._id} className="box">
                <Image 
                  src={proj?.pageUrl}
                  fluid
                  thumbnail
                />
                <Col className="content">
                  <h3>{proj?.name}</h3>
                  <p>{proj?.description}</p>
                  <p><span>tech stacks:</span> {proj?.techStacks}</p>
                  { proj?.url ?
                    <a href={proj?.url}>Open Page</a> :
                    <></>
                  }
                </Col>
              </Col>
            ))}
          </>
        }
      </Row>
    </Container>
  )
}

export default Portfolio