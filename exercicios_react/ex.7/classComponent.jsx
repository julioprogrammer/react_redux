import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <h1>{ this.props.value }</h1>
        );
    };
};

export default ClassComponent;