import Link from "next/link"
import Head from "next/head"
import Layout from '/components/layout'
import stylesCode from '/styles/coding.module.css'


export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Coding</title>
            </Head>
            <p className={stylesCode.intro}>I am a self-taught developer. I started coding on 15 April, 2020 with a goal to create Hemingwayd. Since then I have learnt various languages.</p>
            <div className={stylesCode.row_main}>
                <div className={stylesCode.card}>
                    <h2 className={stylesCode.cardHead}>Web dev</h2>
                    <ul className={stylesCode.cardItems}>
                        <Link href="https://replit.com/@sarclyf?path=folder/HTML%2CCSS%2CJS" className={stylesCode.listItems}><li>HTML</li></Link>
                        <Link href="https://replit.com/@sarclyf?path=folder/HTML%2CCSS%2CJS" className={stylesCode.listItems}><li>CSS</li></Link>
                        <Link href="https://replit.com/@sarclyf?path=folder/HTML%2CCSS%2CJS" className={stylesCode.listItems}><li>Javascript</li></Link>
                        <li>PHP</li>
                        <li>MySql</li>
                    </ul>
                </div>
                <div className={stylesCode.card}>
                    <h2 className={stylesCode.cardHead}>Programming</h2>
                    <ul className={stylesCode.cardItems}>
                        <Link href="https://replit.com/@sarclyf?path=folder/Python" className={stylesCode.listItems}><li>Python</li></Link>
                    </ul>
                </div>
                <div className={stylesCode.card}>
                    <h2 className={stylesCode.cardHead}>I&apos;m learning</h2>
                    <ul className={stylesCode.cardItems}>
                        <li>Data Analytics through Python</li>
                    </ul>
                </div>
            </div>
            
        </Layout>
       
    );
}
