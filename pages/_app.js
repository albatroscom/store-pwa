import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { Layout } from 'antd';
import withNProgress from 'next-nprogress';
import NProgressStyles from "next-nprogress/styles";
import convertDataURIToBinary from "../lib/base64";
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
        if ("serviceWorker" in navigator && "PushManager" in window) {
            navigator.serviceWorker
            .register("/sw.js")
            .then(swReg => {
                console.log("SW Registered : ", swReg);
                Notification.requestPermission().then(permission => {
                    if(permission === "granted"){
                        swReg.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: convertDataURIToBinary('BPxQhQfNiQYUveQoX_V3o0eMKXu4B8oah3hG2Q7OVBsNo06istVZol3L6JEFcPSNtcgfVmWf4MVh1vJ2jDrOHxk')
                        }).then(PushSubscriptionOptions => {
                            console.log(PushSubscriptionOptions);
                        });
                    }
                });
            })
            .catch(error => console.log("Can't register SW : ", error));
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
