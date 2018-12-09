import Head from "next/head";
import PostLink from "../components/PostLink";

// export default () => (
export default class extends React.Component {
    render() {
        return (
            <div>
            <Head>
                <title>Home | Nomad Store</title>
            </Head>
            <h1>Posts:</h1>
            <ul>
                <li>
                    <PostLink title={"showmethe777"} id={0} />
                </li>
                <li>
                    <PostLink title={"It's the live"} id={1} /> 
                </li>
            </ul>
        </div>
        )
    }
}
// );