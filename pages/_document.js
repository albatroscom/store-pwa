import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    // custom Document를 추가했기때문에 추가해준다.
    static async getInitialProps(ctx) { // context
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <html lang="en">
                <Head>
                    <title>Nomad Store</title>
                    <meta name="author" content={"tayor baek"} />
                    <meta name="description" content={"Nomad Store"} />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <style>{`body { background-color: #EFF2F5!important }`}</style>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="black" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}