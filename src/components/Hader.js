import React from 'react';
// start import bootstrap
import {Col , Row } from 'react-bootstrap';
// end import bootstrap 
const Hader = () => {
    return(
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <div className='title'>قائمه الطعام</div>
                <div className='d-flex justify-content-center'>
                <p className='underLine'></p>
                </div>
            </Col>
        </Row>
        )
}

export default Hader;