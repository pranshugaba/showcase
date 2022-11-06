import Head from 'next/head';
import Link from 'next/link';

export default function Rng() {
  return (
    <>
      <Head>
        <title>Random Number Generator</title>
      </Head>
      <h1>Random Number Generator</h1>
      <Link href='/rng/privacy'>Privacy policy</Link>
    </>
  );
}
