import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showImage: false,
            enlarged: false,
            liked: false,
            likes: 0,
            clicks: 0,
        };
    }

    handleClick = () => {
        this.setState({
            liked: true,
            likes: this.state.likes + 1,
            showImage: true,
            clicks: this.state.clicks + 1,
        });
    }

    handleModal = () => {
        this.setState({
            enlarged: true,
            showModal: !this.state.showModal
        })
        console.log('second image');
    }

    render() {
        return (
            <Row>
                <div className="row section-container">
                    <div className="col-4 content-container">
                        <div className="photo-content card card-body">
                            <h2> {this.props.beastInfo.title} </h2>
                            {this.state.showImage && (
                                <img
                                    className="preview-image"
                                    id={this.props.beastInfo._id}
                                    src={this.props.beastInfo.image_url}
                                    alt={this.props.beastInfo.description}
                                    onClick={this.handleModal}
                                />
                            )}
                            <Modal show={this.state.showModal} onHide={this.handleModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.props.beastInfo.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modal-container" >
                                    <img className=" col-10 card" src={this.props.beastInfo.image_url} alt={this.props.beastInfo.description} />
                                    <p>{this.props.beastInfo.description}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <p> {this.props.beastInfo.description}</p>
                        <div className="button-likes-container">
                            <div className="button-likes">
                                <div className="heart-likes">
                                    <div className="likes">
                                        <p> {this.state.likes}</p>
                                    </div>
                                    <div className="heart">
                                        <FaHeart />
                                    </div>
                                </div>
                                <button onClick={this.handleClick} className="btn btn-primary w-100 mb-3" type="button">{this.props.beastInfo.title}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}

export default HornedBeast;