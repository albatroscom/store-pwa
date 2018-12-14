import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    // custom Document를 추가했기때문에 추가해준다.
    static async getInitialProps(ctx) { // context
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <html>
                <Head>
                    <title>Nomad Store</title>
                    <meta name="author" content={"tayor baek"} />
                    <link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
                    <style>{`body { background-color: #EFF2F5!important }`}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}