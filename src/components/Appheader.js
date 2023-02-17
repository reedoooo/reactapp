import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCamera } from "react-icons/fa";

class Appheader extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><FaCamera /> <h1>Hornstagram</h1></Col>
                </Row>
            </Container>
        )
    }
}

export default Appheader;