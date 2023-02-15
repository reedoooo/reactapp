import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Appmain extends React.Component {
    render() {
        return (
            <div className="Beast-choices">
                {data.map((beast, i) => <HornedBeast beastInfo={beast} key={i} />)}
            </div>
        )
    }
}

export default Appmain;