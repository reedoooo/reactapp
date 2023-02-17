import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class Appmain extends React.Component {
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
        const { searchInput } = this.state;

        // const beastPosts = data.filter(beastInfo => (beastInfo.horns === this.state.value) !== '') ? data.filter(beastInfo => beastInfo.horns === this.state.value) : data.filter(beastInfo => (beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) !== []) ? data.filter(beastInfo => beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) :
        //     data))
        //  console.log(beastPosts);
        // const filteredBeasts = beastPosts.filter((beast) => {
        //     console.log(beast);
        //     return beast.title.toLowerCase().includes(searchInput.toLowerCase());
        // });
        return (
            <Container>
                <div className="Beast-choices">
                    <div>
                        {data.map((beast, i) => <HornedBeast beastInfo={beast} key={i} />)}
                        {console.log(data)}
                    </div>
                </div>
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
                </div>
                <Row xs={1} sm={2} md={3} className="g-4">

                    {
                        (
                            (
                                (data.filter(beastInfo => (beastInfo.horns === this.state.value) !== '') ? data.filter(beastInfo => beastInfo.horns === this.state.value) : data.filter(beastInfo => (beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) !== []) ? data.filter(beastInfo => beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) :
                                    data))).map(beast =>
                                        <div className="Beast-choices">
                                            <div>
                                                {data.map((beast, i) => <HornedBeast beastInfo={beast} key={i} />)}
                                                {console.log(data)}
                                            </div>
                                        </div>
                                    )
                    }
                </Row>
            </Container>
        )
    }
}

export default Appmain;