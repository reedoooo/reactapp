import React from 'react';

class Rhino extends React.Component {
    constructor(props) {
        super(props);
        this.id = 1;
        this.imageUrl =
            "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
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
                <button onClick={this.handleClick}>Rhino</button>
            </div>
        );
    }
}

export default Rhino;


// import React from 'react';

// class Rhino extends React.Component {
//     constructor(props) {
//         super(props);
//         // eslint-disable-next-line no-unused-expressions, no-sequences
//         this.id = 2,
//         this.imageUrl = "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//         this.title = "Rhino Family",
//         this.description = "Parent rhino with two babies",
//         this.keyWord = "rhino",
//         this.horns = 2
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

// export default Rhino;