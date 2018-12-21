import React, { Component } from 'react';
import styled from 'styled-components';

export class Button extends Component<Props, {}> {

    state={
        isActive:false
    }

    constructor(props) {
        super(props);

        this.handleClick=this.handleClick.bind(this);
    }

    private handleClick=(e) => {
        const {onClick} = this.props;
        const {isActive} = this.state;

        this.setState({
            isActive:isActive ? false : true
        });

        onClick(e);
    }
    render() {
        const {name,children} = this.props;

        return(
            <ButtonTag
                name={name}
                className={this.state.isActive ? "active" : ""}
                onClick={this.handleClick}
            >
                { children }
            </ButtonTag>
        )

    }
}

const ButtonTag = styled.button`
`