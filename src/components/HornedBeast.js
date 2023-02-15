import React from 'react';
import { FaHeart } from "react-icons/fa";
import Row from 'react-bootstrap/Row';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false,
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

    render() {
        return (
            <Row>
                <div className="row section-container">
                    <div className="col-4 content-container">
                        <div className="card card-body">
                            <h2> {this.props.beastInfo.title} </h2>

                            {this.state.showImage && (
                                <img
                                    src={this.props.beastInfo.image_url}
                                    alt={this.props.beastInfo.description}
                                />
                            )}
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