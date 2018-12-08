import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
    <div>
        <Head>
            <title>Home | Nomad Store</title>
        </Head>
        <h1>Posts:</h1>
        <ul>
            <li>
                <PostLink title={"showmethe777"} />
            </li>
            <li>
                <PostLink title={"It's the live"} /> 
            </li>
        </ul>


    </div>
);

export default withLayout(Index);