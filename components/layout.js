import Head from 'next/head';
import Image from 'next/image';
import styles from '/components/layout.module.css';
import utilStyles from '/styles/utils.module.css';
import Link from 'next/link';
import Navbar from '/parts/Navbar.js';

const name = 'Sarthak Jain';
export const siteTitle = 'Sarthak Jain';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <Navbar/>
            <Image
              className={styles.profile_image}
              priority
              src="/IMG-3685-modified.png"
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <Navbar/>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
