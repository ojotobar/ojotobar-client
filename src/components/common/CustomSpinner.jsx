import React from 'react'
import { Spinner } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

const CustomSpinner = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '50%'
    }

  return (
    <Row style={styles}>
        <Spinner animation='border' size='lg' variant='danger' style={{ width: '5rem', height: '5rem' }}/>
    </Row>
  )
}

export default CustomSpinner