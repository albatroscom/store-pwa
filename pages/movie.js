import Head from 'next/head';
import { withRouter } from 'next/router';

const Movie = props => (
    <div>
        <Head>
            <title>{props.router.query.title} | Nomad Store</title>
        </Head>
        <h1>{props.title}</h1>
        <p>this is movie page</p>
    </div>
);

Movie.getInitialProps = async() => {
    // call the api
    // parse the result
    // return result
    return { title: "this is movie get Initial Props" };
}

export default withRouter(Movie);