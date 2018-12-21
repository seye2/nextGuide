import React, { Component } from 'react';
import styled from 'styled-components';
import {Input} from './input';

export class InputA extends Input {
    static defaultProps={
        type:"text",
        name:"input",
        placeholder:"",
        onChange:() => {}
    }

    render() {
        const {name, type, placeholder,onChange} = this.props;

        return(
            <InputDiv>
                <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </InputDiv>
        )

    }
}


interface Props {
    type?:string,
    name?:string,
    placeholder?:string,
    onChange?:Function
}

const InputDiv = styled.div`
    button{
        background:#efefef;
        
        &.active{
            background:yellow;
        }
    }
`

