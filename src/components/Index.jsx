import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap'; 
 

class Index extends Component {
  render() {
    return (
        <FrontPage>
          <div className="index text-center">
            <p>Welcome to the test page</p>
            <div className="text-center">
              <Row>
                <Col xs="6">
                <Link to="/login">
                  <ButtonContainer>
                    Login
                  </ButtonContainer>
                </Link>
                </Col>
                <Col xs="6">
                <Link to="/register">
                  <ButtonContainer>
                    Register
                  </ButtonContainer>
                </Link>
                </Col>
              </Row>
            </div>
            </div>
        </FrontPage>
    )
  }
}

const FrontPage = styled.div`
.index{
  width: 50%;
  margin: auto;
  padding: 20rem 4rem 10rem 10rem;
}
.index p{
  font-size: 5rem;
}
`;

export default Index;
