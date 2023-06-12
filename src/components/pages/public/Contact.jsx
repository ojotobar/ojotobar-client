import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetPersonalInfoQuery } from '../../../features/api/userApi';
import { useSelector } from 'react-redux';
import CustomSpinner from '../../common/CustomSpinner';
import SocialMedia from './SocialMedia';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
  const { userId } = useSelector((state) => state.auth)
  const { data: info, isLoading } = useGetPersonalInfoQuery(userId);

  return (
    <Container fluid className='contact py-3'>
      <h1 className="heading">contact <span>me</span></h1>
      { isLoading ?
        <CustomSpinner /> :
        <>
          <Row className='Row px-5'>
            <Col className='mb-3 info-container' sm={12} md={6} lg={5}>
              <h1>get in touch</h1>
              <ContactDetails info={info} />
              <SocialMedia />
            </Col>
            { /* Form Section */}
            <Col className='mb-3' sm={12} md={6} lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </>
      }
    </Container>
  )
}

export default Contact