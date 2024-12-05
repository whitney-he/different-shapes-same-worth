import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/globals.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Website</title>
        <meta name="description" content="A simple, responsive website for static text." />
      </Head>
      
      <main className={styles.main}>
        <h1>Genderqueer People</h1>
        <p>
          Genderqueer people are individuals whose gender identity doesn’t fully align with the traditional boxes of man and woman. 
          Unfortunately, many face discrimination, bias, and even violence for simply being who they are.
        </p>

        <div className={styles.quoteSection}>
          <blockquote>
            "[Genderqueer] young people are already at risk for mental health concerns, often tied to experiences of minority stress."
            <br />
            <cite>- Nature</cite>
          </blockquote>
          <blockquote>
            "States that passed anti-transgender laws saw suicide attempts by transgender and gender-nonconforming teenagers increase."
            <br />
            <cite>- NPR</cite>
          </blockquote>
          <blockquote>
            "The trans community still faces considerable stigma due to more than a century of being mischaracterized."
            <br />
            <cite>- Human Rights Campaign</cite>
          </blockquote>
        </div>

        <div className={styles.personalQuote}>
          <p>
            "We are not some hypothetical political debate. We’re whole human beings with communities around us."
            <br />
            <cite>- Daniel, trans man</cite>
          </p>
        </div>
      </main>
    </div>
  );
}
