import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';


const Logo = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="12" className='text-center text-white'>
                        <img src='images/logo.png' width={150} className='text-center mt-2' alt='logotip' />
                        Honest Compyuter Service
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Logo.propTypes = {};

export default Logo;