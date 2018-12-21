import * as React from 'react'
import styled from 'styled-components';

export class GnbA extends React.Component<any, {}> {
    render() {
        return (
            <Gnb className="gnb">
                {this.menuAuth}
            </Gnb>
        )
    }
    private get menuAuth() {
        const {EXCHANGE, WALLET, CUSTOMER} = this.props;
        const isAuth=false;
        const menu=[
            EXCHANGE,
            isAuth ? WALLET : null,
            CUSTOMER,
        ];

        return (
            <React.Fragment>
                {
                    menu.map((item,index) => {
                        return item ?
                            <Menu href="#none" key={index}>{item}</Menu>
                            : null
                    })
                }
            </React.Fragment>
        )
    }
}

const Gnb = styled.section`
`

const Menu = styled.a`
`

