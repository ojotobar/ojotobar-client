import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { btnStyles } from '../../../helpers/settings';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useSendNotificationMutation } from '../../../features/api/notificationApi';

const ContactForm = () => {
    const { userId } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      })
    
    const [sendNotification, { data: res, isSuccess, isError, error, isLoading }] = useSendNotificationMutation();
    const { name, email, message } = formData;
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const clearInput = () => {
        setFormData(() => ({
            name: '',
            email: '',
            message: ''
        }))
    }  
    
    useEffect(() => {
        if(isError){
            toast.error(error?.error);
        }
    }, [error, isError])

    useEffect(() => {
        if(isSuccess){
            toast.success(res?.message);
        }
    }, [isSuccess, res])
    
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    clearInput();
    setValidated(true);
    e.preventDefault()
    const data = { userId, formData }
    await sendNotification(data);
    };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
            <Col className='mb-3 inputBox' xl={12}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                        
                    />
                    <Form.Control.Feedback type="invalid">Name is required!</Form.Control.Feedback>
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
                        value={email}
                        onChange={onChange}
                    />
                    <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
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
                    value={message}
                    onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">Message is required!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="">
            <Col xs={12} sm={6} md={6} lg={4}>
                {
                    isLoading ?
                    <Button type="submit" className='w-100' style={btnStyles} disabled>
                        <Spinner/>
                    </Button> :
                    <Button type="submit" className='w-100' style={btnStyles}>Send Message</Button>
                }
            </Col>
            <Col xs={0} sm={6} md={6} lg={8}></Col>
        </Row>
    </Form>
  )
}

export default ContactForm