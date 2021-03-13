/* FOOTER COMPONENT */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <span id='github'>
              <a
                href='https://github.com/gloriousLoaf'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fab fa-github fa-lg mr-1'></i>
                gloriousLoaf
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
