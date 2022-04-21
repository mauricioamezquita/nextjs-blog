import Link  from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function PrimerPost() {
    return (
        <Layout>
            <Head>
                <title>Coso vaina</title>
            </Head>

            <h1>Mi primer post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>                
            </h2>
        </Layout>       
    )
} 