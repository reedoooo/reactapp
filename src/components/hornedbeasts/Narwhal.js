import React from 'react';

class Narwhal extends React.Component {
    constructor(props) {
        super(props);
        this.id = 1;
        this.imageUrl =
            'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg';
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
                <button onClick={this.handleClick}>Narwhal</button>
            </div>
        );
    }
}

export default Narwhal;





// import React from 'react';

// class Narwhal extends React.Component {
//     constructor(props) {
//         super(props);
//         // eslint-disable-next-line no-unused-expressions, no-sequences
//         this.id = 1,
//         this.imageUrl = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//         this.title = "UniWhal",
//         this.description = "A unicorn and a narwhal nuzzling their horns",
//         this.keyWord = "narwhal",
//         this.horns = 1
//     }
//     render() {
//         return (
//             <div>
//                 <h2> {this.keyWord} </h2>
//                     <img src={this.imageUrl} alt={this.description} title={this.title}></img>
//                 <p></p>
//             </div>
//         )
//     }
// }

// export default Narwhal;