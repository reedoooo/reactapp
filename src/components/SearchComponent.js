import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        };
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    render() {
        const beastPosts = this.props.beastInfo;
        // console.log(beastPosts);
        const { searchInput } = this.state;
        const filteredBeasts = beastPosts.filter((beast) => {
            console.log(beast);
            return beast.title.toLowerCase().includes(searchInput.toLowerCase());
        });

        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{ }</InputGroup.Text>
                    <Form.Control
                        type="search"
                        onChange={this.handleChange}
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        value={searchInput}
                    />
                </InputGroup>
                {filteredBeasts.map((beast, i) => (
                    <div key={i}>
                        <h2>{beast.title}</h2>
                        <img
                            className="preview-image"
                            id={beast._id}
                            src={beast.image_url}
                            alt={beast.description}
                            onClick={this.handleModal}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchComponent;