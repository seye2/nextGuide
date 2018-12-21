import * as React from 'react'
import styled from 'styled-components';

const Sidebar = styled.section`
`

export class SidebarA extends React.Component<any, {}> {
    render() {
        const {children} = this.props;

        return (
            <Sidebar>
                {children}
            </Sidebar>
        )
    }
}