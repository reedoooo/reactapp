import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup';

class Appmain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            value: 'All'
        };
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    handleSelectChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const { searchInput } = this.state;
        const filteredBeasts = data.filter(beast =>
            (searchInput === '' || beast.title.toLowerCase().includes(searchInput.toLowerCase())) &&
            (this.state.value === 'All' || beast.horns === parseInt(this.state.value))
        );

        return (
            <Container>

                <div>
                    <Stack id="search-container" direction="horizontal" gap={3}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Filter by:</InputGroup.Text>
                            <Form.Control as="select" onChange={this.handleSelectChange}>
                                <option value="All">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </Form.Control>
                            <Form.Control
                                type="search"
                                onChange={this.handleChange}
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                value={searchInput}
                            />
                        </InputGroup>
                    </Stack>
                </div>
                <div className="Beast-choices">
                    {filteredBeasts.map((beast, i) => (
                        <Col key={i}>
                            <HornedBeast beastInfo={beast} />
                        </Col>
                    ))}
                </div>
            </Container>
        );
    }
}

export default Appmain;