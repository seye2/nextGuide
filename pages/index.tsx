import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {ButtonA, InputA, UI} from "../components"

export default class extends React.Component<Props,{}> {
    static defaultProps = {
        title:""
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {title} = this.props;

        return (
            <UI.ContainerA>
                <UI.ContentsA>
                    <Head>
                        <title>{title}</title>
                        <meta name="title" content={title} />
                    </Head>

                    <InputA
                        type="password"
                        name="inputa"
                        onChange={(e) => {
                            console.log(e)
                        }}
                    />
                    <InputA
                        type="text"
                        name="inputa"
                        onChange={(e) => {
                            console.log(e)
                        }}
                    />

                    <ButtonA
                        name="buttona"
                        onClick={(e) => {
                            console.log(e)
                        }}
                    >11</ButtonA>
                    <br />
                    <Link href={{pathname:"/page"}}><a>move to page</a></Link>
                </UI.ContentsA>
            </UI.ContainerA>
        )
    }
}

interface Props {
    title:string,
    children:any
}

