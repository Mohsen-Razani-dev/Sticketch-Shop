import React, {Component} from 'react';

class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user:undefined
        }
    }

    render() {
        return (
            <div>
                Hello Authenticated
            </div>
        );
    }
}

export default AuthenticatedComponent;