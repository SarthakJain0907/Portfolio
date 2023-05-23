import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';
import utilStyles from '/styles/utils.module.css';
import Link from 'next/link'
import Navbar from '/parts/Navbar.js';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am interested in Mathematics, Web Development, tennis, and pretty much anything that comes my way.</p>
      </section>
    </Layout>
  );
}
