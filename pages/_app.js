import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { Layout } from 'antd';
import withNProgress from 'next-nprogress';
import NProgressStyles from "next-nprogress/styles";
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

    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
            .register("/sw.js")
            .then(result => console.log("SW Registered : ", result))
            .catch(error => console.log("Can't register SW : ", error));
        }

        if ("PushManager" in window) {
            Notification.requestPermission();
        }
    }

    render() {
        const { Component, pageProps, apollo } = this.props;
        return (            
            <Container>
                <NProgressStyles color="blue" spinner={true} />
                <ApolloProvider client={apollo}>
                <Layout>
                    <Component {...pageProps} />
                    <Footer>This is Footer</Footer>
                </Layout>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withNProgress()(withApollo(Myapp));
