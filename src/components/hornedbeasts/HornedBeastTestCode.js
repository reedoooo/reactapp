import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false,
            clicks: 0,
        };
    }

    handleClick = () => {
        this.setState({
            showImage: true,
            clicks: this.state.clicks + 1,
        });
    }

    render() {
        return (
            <div>
                <h2> {this.props.beastInfo.title} </h2>
                {this.state.showImage && (
                    <img
                        src={this.props.beastInfo.image_url}
                        alt={this.props.beastInfo.description}
                    />
                )}
                <button onClick={this.handleClick}>{this.props.beastInfo.title}</button>
            </div>
        );
    }
}

export default HornedBeast;