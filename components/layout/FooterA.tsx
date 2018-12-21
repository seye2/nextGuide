import * as React from 'react'
import styled from 'styled-components';

const Footer = styled.section`
`

export class FooterA extends React.Component<any, {}> {
    render() {
        const {children} = this.props;

        return (
            <Footer className="footer">
                {children}
            </Footer>
        )
    }
}