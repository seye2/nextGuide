import * as React from 'react'
import styled from 'styled-components';

const Contents = styled.section`
`

export class ContentsA extends React.Component<any, {}> {
    render() {
        const {children} = this.props;

        return (
            <Contents>
                {children}
            </Contents>
        )
    }
}