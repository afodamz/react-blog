import React, {useState} from 'react';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

export default function Posts(props) {
    const [isfirstOpen, setIsfirstOpen] = useState(false);
    const [issecondOpen, setIssecondOpen] = useState(false);
    const [isthirdOpen, setIsthirdOpen] = useState(false);
    const [isfourthOpen, setIsfourthOpen] = useState(false);

    const firsttoggle = () => setIsfirstOpen(!isfirstOpen);
    const secondtoggle = () => setIssecondOpen(!issecondOpen);
    const thirdtoggle = () => setIsthirdOpen(!isthirdOpen);
    const fourthtoggle = () => setIsfourthOpen(!isfourthOpen);

    return (
        <PostsLists>
            <Container>
                <Row>
                    <Col xs="4">
                    <div className="postbody">
                        <h1 className="head text-center">Title</h1>
                        <p>Lorem Ipsium</p>
                        <div className="text-center">
                            <Button color="primary" id="details-btn" onClick={firsttoggle} style={{ marginBottom: '1.5rem' }}>Details</Button>
                            <Collapse isOpen={isfirstOpen}>
                                <Card>
                                <CardBody className="details-body">
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    </Col>
                    <Col xs="4">
                    <div className="postbody">
                        <h1 className="head text-center">Title</h1>
                        <p>Lorem Ipsium</p>
                        <div className="text-center">
                            <Button color="primary" id="details-btn" onClick={secondtoggle} style={{ marginBottom: '1.5rem' }}>Details</Button>
                            <Collapse isOpen={issecondOpen}>
                                <Card>
                                <CardBody className="details-body">
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    </Col>
                    <Col xs="4">
                    <div className="postbody">
                        <h1 className="head text-center">Title</h1>
                        <p>Lorem Ipsium</p>
                        <div className="text-center">
                            <Button color="primary" id="details-btn" onClick={thirdtoggle} style={{ marginBottom: '1.5rem' }}>Details</Button>
                            <Collapse isOpen={isthirdOpen}>
                                <Card>
                                <CardBody className="details-body">
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    </Col>
                    <Col xs="4">
                    <div className="postbody">
                        <h1 className="head text-center">Title</h1>
                        <p>Lorem Ipsium</p>
                        <div className="text-center">
                            <Button color="primary" id="details-btn" onClick={fourthtoggle} style={{ marginBottom: '1.5rem' }}>Details</Button>
                            <Collapse isOpen={isfourthOpen}>
                                <Card>
                                <CardBody className="details-body">
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </PostsLists>
    )
}

const PostsLists = styled.section`
margin-top: 5rem;
.postbody{
    border: none;
    box-shadow: 0rem 0rem 0.3rem 0.1rem #3e3a3a;
    margin-bottom: 3rem;
    border-radius: 2rem;
    padding: 0.6rem;
}
.head{
    background-color: var(--lightBlue)!important;
    color: var(--mainWhite);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}
.head:hover{
    box-shadow: 0rem 0rem 0.3rem 0.1rem #3e3a3a;
}
.postbody:hover{
    box-shadow: 0.2rem 0.3rem 0.3rem 0.5rem #3e3a3a;;
    cursor: pointer;
}
#details-btn{
    padding: 1.5rem 20px;
    border-radius: 10px;
    font-family: Montserrat-Bold;
    font-size: 1.5rem;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s; 
}
.details-body{
    font-size: 2rem;
}

`;