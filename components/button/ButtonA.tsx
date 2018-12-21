import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from './Button';

export class ButtonA extends Button {
    static defaultProps={
        name:"button",
        onClick:() => {}
    }

    render() {
        const {name, children,onClick} = this.props;

        return(
            <ButtonDiv>
                <Button
                    name={name}
                    onClick={onClick}
                >
                    { children }
                </Button>
            </ButtonDiv>
        )

    }
}

interface Props {
    name?:string,
    children?:any,
    onClick?:Function
}

const ButtonDiv = styled.div`
    button{
        background:#efefef;
        &.active{
            background:yellow;
        }
    }
`

