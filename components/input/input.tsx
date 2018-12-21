import React, { Component } from 'react';
import styled from 'styled-components';

export class Input extends Component<Props, {}> {
    state={
    }

    constructor(props) {
        super(props);

        this.onChange=this.onChange.bind(this);
    }

    private onChange=(e) => {
        const {onChange} = this.props;
        onChange(e);
    }
    render() {
        const {name,type,placeholder} = this.props;

        return(
            <InputTag
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={this.onChange}
            />
        )

    }
}

const InputTag = styled.input`
`