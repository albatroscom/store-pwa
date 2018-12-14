import Head from "next/head";
import Header from '../components/Header';
import Button from '../components/Button';
import { Layout } from 'antd';
const { Content } = Layout;

export default ({ data }) => (
<React.Fragment>
    <Head>
        <title>Home | Nomad Store</title>
    </Head>
    <Header 
        centerColumn={<h4>Nomad Store</h4>}
        rightColumn={
            <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
        }
        leftColumn={
            <Button href="/search" text="Search" btnIcon={"search"} />
        } />
    <div>
        <h1>Category!</h1>
    </div>
</React.Fragment>
);