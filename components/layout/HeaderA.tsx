import * as React from 'react'
import styled from 'styled-components';

export class HeaderA extends React.Component<any, {}> {
    render() {
        const {children,src,MENU_TEXT_HOME} = this.props;

        return (
            <Header className="header">
                <HeaderContents>
                    <H1Title>
                        <Image src={src} alt={MENU_TEXT_HOME} />
                    </H1Title>
                    {
                        React.Children.map(children, (child : any) => React.cloneElement(child, {
                            ...this.props
                        }))
                    }
                </HeaderContents>
            </Header>
        )
    }
}


const Header = styled.section`
`

const HeaderContents = styled.div`
    display:flex;
    width:1200px;
    margin:0 auto;
`

const H1Title = styled.h1`
    img{
        width:150px;height:28px;
    }
`

const Image = styled.img`
`

// interface Props {
//     titleImg:string
// }

