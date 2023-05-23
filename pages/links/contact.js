import Link from "next/link"
import Head from "next/head"
import Layout from '/components/layout'
import styleCon from '/styles/contact.module.css'


export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Contact Me</title>
            </Head>
            <div className={styleCon.mainDiv}>
                <h1><Link href="https://www.instagram.com/sarclyf/" className={styleCon.instaHead}>Instagram</Link></h1>
                <h1><Link href="https://twitter.com/sarclyf" className={styleCon.twitHead}>Twitter</Link></h1>
                <h1><Link href="https://www.linkedin.com/in/sarclyf/" className={styleCon.linkHead}>LinkedIn</Link></h1>
            </div>
        </Layout>
       
    );
}
