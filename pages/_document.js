import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    // custome Document를 추가했기때문에 추가해준다.
    static async getInitialProps(ctx) { // context
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <html>
                <Head>
                    <meta name="author" content={"tayor baek"} />
                    <link href="/static/styles.css" rel={"stylesheet"} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}