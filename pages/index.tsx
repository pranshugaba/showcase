import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Showcase</title>
        <meta name='description' content='Some things that I have made' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pranshu Gaba</h1>

        <p className={styles.description}>
          A showcase of things that I have made.
        </p>

        <div className={styles.grid}>
          <Link href='/rng' className={styles.card}>
            <h2>RNG &rarr;</h2>
            <p>An Android app to generate random numbers.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://pranshugaba.com'
          target='_blank'
          rel='noopener noreferrer'>
          &copy; 2022 Pranshu Gaba
        </a>
      </footer>
    </div>
  );
}
