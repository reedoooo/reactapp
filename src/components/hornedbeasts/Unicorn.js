import React from 'react';

class Unicorn extends React.Component {
    constructor(props) {
        super(props);
        this.id = 1;
        this.imageUrl =
            "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg";
        this.title = 'UniWhal';
        this.description = 'A unicorn and a narwhal nuzzling their horns';
        this.keyWord = 'narwhal';
        this.horns = 1;
        this.state = {
            showImage: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ showImage: true });
    }

    render() {
        return (
            <div>
                <h2> {this.props.keyword} </h2>
                {this.state.showImage && (
                    <img
                        src={this.imageUrl}
                        alt={this.description}
                        title={this.title}
                    />
                )}
                <button onClick={this.handleClick}>Unicorn</button>
            </div>
        );
    }
}

export default Unicorn;


// import React from 'react';

// class Unicorn extends React.Component {
//     constructor(props) {
//         super(props);
//         // eslint-disable-next-line no-unused-expressions, no-sequences
//         this.id = 3,
//         this.imageUrl = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//         this.title = "Unicorn Head",
//         this.description = "Someone wearing a very silly unicorn head mask",
//         this.keyWord = "unicorn",
//         this.horns = 1
//     }
//     render() {
//         return (
//             <div>
//                 <h2> {this.keyWord} </h2>
//                 <img src={this.imageUrl} alt={this.description} title={this.title}></img>
//                 <p></p>
//             </div>
//         )
//     }
// }

// export default Unicorn;