import React from 'react'
import { Provider } from 'mobx-react';
import App, {Container} from 'next/app'

import {UI} from '../components';
import { injectGlobal } from 'styled-components';
import globalStyles from "../styles/common";
injectGlobal`${globalStyles()}`;

import languageStore from "../store/languageStore";

const stores = {
    languageStore
};

//console.log(assetPrefix);
export default class MyApp extends App<any, any> {
    static defaultProps = {
        config: {
            title: pageTitle,
            assetUrl: assetPrefix
        }
    }

    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps}
    }

    componentDidCatch (error, errorInfo) {
        console.log('CUSTOM ERROR HANDLING', error)
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo)
    }

    render () {
        const {props} = this as any
        const {Component, pageProps, config} = props

        return (
            <Container>
                <Provider {...stores}>
                    <UI.LayoutA>
                        <Component {...pageProps} {...config} />
                    </UI.LayoutA>
                </Provider>
            </Container>
        )
    }
}


interface Props {
    Component: React.Component
    pageProps: any
    store: any
    isMobile: boolean
}


