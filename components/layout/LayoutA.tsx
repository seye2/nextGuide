import * as React from 'react';
import { inject, observer } from 'mobx-react';

import {HeaderA} from "./HeaderA";
import {GnbA} from "./GnbA";
import {FooterA} from "./FooterA";
import {LoadingA} from "../loading/LoadingA";
import styled from 'styled-components';

@inject('languageStore')
@observer
export class LayoutA extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.props.languageStore.setLang();
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.languageStore.setData('dd');
    //     },4000)
    // }
    render() {
        const {children, languageStore} = this.props;
        const lang=languageStore.lang;

        return(
           lang ? this.layoutRender(children,lang) : <LoadingA />
        )
    }
    private layoutRender(children,lang) {
        const {HEADER, FOOTER} = lang;
        Object.assign(HEADER, {
            src:"https://bitnaru.com/images/bitnaruLogo.png"
        })

        return (
            <Layout>
                <HeaderA
                    {...HEADER}
                >
                    <GnbA />
                </HeaderA>

                { children }

                <FooterA
                    {...FOOTER}
                />
            </Layout>
        )
    }
}

const Layout = styled.section`
    width:1200px;
    margin:0 auto;
`


