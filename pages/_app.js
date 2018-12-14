import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { Layout } from 'antd';
const { Footer } = Layout;

class Myapp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        // getInitialProps 가 있는지 확인
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <Container>
                    <Layout>
                        <Component {...pageProps} />
                        <Footer>This is Footer</Footer>
                    </Layout>
                </Container>
            </ApolloProvider>
        );
    }
}

export default withApollo(Myapp);
