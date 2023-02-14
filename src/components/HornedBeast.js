import React from 'react';
import Narwhal from './hornedbeasts/Narwhal';
import Rhino from './hornedbeasts/Rhino';
import Unicorn from './hornedbeasts/Unicorn';

class HornedBeast extends React.Component {

    render() {
        return (
            <div>
                <Narwhal />
                <Rhino />
                <Unicorn />
            </div>
        )
    }
}

export default HornedBeast;