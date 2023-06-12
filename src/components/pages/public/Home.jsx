import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../../../features/api/userApi';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../../features/auth/authSlice';
import CustomSpinner from '../../common/CustomSpinner';

const Home = () => {
  const dispatch = useDispatch();
  
  const { data: user, isLoading, isSuccess } = useGetUserDetailsQuery();
  const middleInitial = user?.middleName ? `${user?.middleName[0]}.` : '';
  useEffect(() => {
    if(isSuccess || user){
        dispatch(setUserId(user?.id));
    }

}, [user, isSuccess, dispatch]);

  return (
    <Container fluid className='home'>
        { isLoading ? 
          <CustomSpinner /> :
          <>
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
                <h3>hi, I am {user?.lastName} {user?.firstName} {middleInitial}</h3>
                <span>Software Engineer</span>
                <p>{user?.biography}</p>
                <Link to='about' className='Btn'>about me <i className="fas fa-user"></i></Link>
              </Col>
            </Row>
          </>
        }
    </Container>
  )
};

export default Home