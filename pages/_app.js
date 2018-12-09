import App, { Container} from 'next/app';
import React from 'react';
import Header from '../components/Header';

export default class Myapp extends App {
    static async getInitialProps({Component, router, ctx}){
        let pageProps = {};
        // getInitialProps 가 있는지 확인
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    render(){
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Header />
                <Component { ...pageProps }/>
            </Container>
        )
    }
}