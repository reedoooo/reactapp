import React from 'react';
import { FaHeart } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import ModalComponent from './ModalComponent';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            enlarged: false,
            liked: false,
            likes: 0,
            clicks: 0,
        };
    }

    handleModal = () => {
        this.setState({
            enlarged: true,
            showModal: !this.state.showModal,
        });
    }

    handleLike = () => {
        this.setState({
            liked: true,
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-7">
                        <div className="photo-content card card-body">
                            <h2>{this.props.beastInfo.title}</h2>
                            <img
                                role="button"
                                className="preview-image"
                                id={this.props.beastInfo._id}
                                src={this.props.beastInfo.image_url}
                                alt={this.props.beastInfo.description}
                                onClick={this.handleModal}
                            />
                            <ModalComponent
                                id="example-fade-text"
                                show={this.state.showModal}
                                handleModal={this.handleModal}
                                title={this.props.beastInfo.title}
                                image_url={this.props.beastInfo.image_url}
                                description={this.props.beastInfo.description}
                                liked={this.state.liked}
                                likes={this.state.likes}
                                handleLike={this.handleLike}
                            />
                        </div>
                        <p>{this.props.beastInfo.description}</p>
                        <div className="button-likes-container">
                            <div className="button-likes">
                                <div className="heart-likes">
                                    <div className="likes">
                                        <p>{this.state.likes}</p>
                                    </div>
                                    <div className="heart">
                                        <FaHeart />
                                    </div>
                                </div>
                                <button onClick={this.handleLike} className="btn btn-primary w-100 mb-3" type="button">{this.props.beastInfo.title}</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default HornedBeast;
