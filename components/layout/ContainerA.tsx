import * as React from 'react'
import styled from 'styled-components';

const Container = styled.section`
    margin:70px 0 0 0;
`

export class ContainerA extends React.Component<any, {}> {
    render() {
        const {children} = this.props;
        return (
            <Container>
                {children}
            </Container>
        )
    }
}