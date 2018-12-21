import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js


export default class MyDocument extends Document<any, any> {

    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render() {
        //console.log("process.env.NODE_ENV::",process.env.NODE_ENV);

        return (
            <html lang="ko">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
                <meta name="naver-site-verification" content="52328bcedf2b60756f3bba0d0faaa009149082a8"/>
                <meta name="title" content="" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="og:title" content="" />
                <meta name="og:image" content="" />
                <meta name="og:description" content="" />
                <link rel="icon" href="https://bitnaru.com/bitnaru_favi.png" />

                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css" />

                {this.props.styleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}