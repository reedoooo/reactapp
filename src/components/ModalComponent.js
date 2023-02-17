import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Modal } from 'react-bootstrap';

class ModalComponent extends React.Component {
    render() {
        return (
            <Modal className="modal" show={this.props.show} onHide={this.props.handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="section-container">
                        <div className="col-10 ">
                            <img className="photo-content card modal-image" src={this.props.image_url} alt={this.props.description} width="100%" height="100%" preserveAspectRatio="none" />
                            <p>{this.props.description}</p>
                            <div className="button-likes-container">
                                <div className="button-likes">
                                    <div className="heart-likes">
                                        <div className="likes">
                                            <p>{this.props.likes}</p>
                                        </div>
                                        <div className="heart">
                                            <FaHeart />
                                        </div>
                                    </div>
                                    <button onClick={this.handleLike} className="btn btn-primary w-100 mb-3">Like</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalComponent;