import React from 'react';
import HornedBeast from './HornedBeast';
import NavBar from './NavBar';
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
            searchInput: '', //sets state of search input to an empty string
            value: 'All' //sets state of initial search value with the drop-down to include all features
        };
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value }); //event-handler updates state by targeting searchInput empty string
    };

    handleSelectChange = (e) => {
        this.setState({ value: e.target.value }); //event-handler updates state by targeting drop-down value
    };

    render() {
        const { searchInput } = this.state; //gives searchInput a value equal to the searchInput state
        const filteredBeasts = data.filter(beast => //creates a new array by using a function that filters everything in "data" out but title and horns
            (searchInput === '' || beast.title.toLowerCase().includes(searchInput.toLowerCase())) && //Checks two conditions: 1) if searchInput is empty or if the value has a case-sensitive math
            (this.state.value === 'All' || beast.horns === parseInt(this.state.value)) //2) of the state value is All or if the object's horns value is equal to the number in state
        );

        return (
            <Container className="body-div">
                <div className="sub-body-div">
                    <div className="nav-stack">
                        <Stack>
                            <nav className="nav-div">
                                <Col>
                                    <NavBar />
                                </Col>
                            </nav>
                        </Stack>
                    </div>
                    <div className="search-stack">
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
                        <Stack>
                            <div className="Beast-choices">
                                {filteredBeasts.map((beast, i) => (
                                    <Col key={i}>
                                        <HornedBeast beastInfo={beast} />
                                    </Col>
                                ))}
                            </div>
                        </Stack>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Appmain;