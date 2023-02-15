import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';

class Appmain extends React.Component {
    render() {
        return (
            <Container>
                <div className="Beast-choices">
                    {data.map((beast, i) => <HornedBeast beastInfo={beast} key={i} />)}
                </div>
            </Container>
        )
    }
}

export default Appmain;