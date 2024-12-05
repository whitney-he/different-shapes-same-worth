import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/globals.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Different Shapes Same Worth</title>
        <meta name="description" content="Different Shapes Same Worth" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.header}>Support Genderqueer People 😼</h1>
        <p className={styles.paragraph}>
          Genderqueer people are individuals whose gender identity doesn't fully align with the traditional boxes of man and woman. Unfortunately, many genderqueer individuals face discrimination, bias, and even violence just for experiencing gender differently and being who they are. As a result of the unnecessary hate they experience, many genderqueer peoples’ mental healths are significantly negatively affected.
        </p>

        <div className={styles.quoteSection}>
          <blockquote className={styles.blockquote}>
            "[Genderqueer] young people are already at risk for mental health concerns, often tied to experiences of minority stress, which is best understood as stress that accumulates due to negative experiences associated with one’s minority identity. [...] We hypothesize that state-wide and national discrimination could lead [genderqueer] young people to seriously consider suicide through feeling unimportant and disconnected from others."
            <br />
            <a href="https://www.nature.com/articles/s41562-024-01979-5.epdf?sharing_token=EbX7LsH7-AF5n99850vpnNRgN0jAjWel9jnR3ZoTv0PNveFlXHsicuqelg3jvg1Wcsju1CXHxspC9onbX6frEcU1-J5M25Ml5piLTNjBr959LGK7ejPr20VtTVSb18ArMlJnGNGgZYyU9CJQoJuUjN01H4VVGluDqO_epnWIg_A%3D" target="_blank" rel="noopener noreferrer">
              <cite className={styles.cite}>- Nature</cite>
            </a>
          </blockquote>
          <blockquote className={styles.blockquote}>
            "States that passed anti-transgender laws aimed at minors saw suicide attempts by transgender and gender nonconforming teenagers increase by as much as 72% in the following years, a new study by The Trevor Project says."
            <br />
            <a href="https://www.hrc.org/resources/understanding-the-transgender-community" target="_blank" rel="noopener noreferrer">
              <cite className={styles.cite}>- NPR</cite>
            </a>
          </blockquote>
          <blockquote className={styles.blockquote}>
            "the trans community still faces considerable stigma due to more than a century of being characterized as mentally ill, socially deviant and sexually predatory. While these intolerant views have faded in recent years for lesbians and gay men, trans people are often still ridiculed by a society that does not understand us."
            <br />
            <a href="https://www.npr.org/sections/shots-health-news/2024/09/25/nx-s1-5127347/more-trans-teens-attempted-suicide-after-states-passed-anti-trans-laws-a-study-shows" target="_blank" rel="noopener noreferrer">
              <cite className={styles.cite}>- Human Rights Campaign</cite>
            </a>
          </blockquote>
        </div>

        <div className={styles.quoteSection}>
          <blockquote className={styles.blockquote}>
            "We are not some hypothetical political debate. We’re whole human beings with communities around us and people who love us and value us."
            <br />
            <cite className={styles.cite}>- Daniel, trans man (he/him)</cite>
          </blockquote>
          <blockquote className={styles.blockquote}>
            "I’m tired of worrying that people will hate me just for finding out I’m transgender. I didn’t choose to be this way and I just want to exist in peace. Transgender people aren’t that different from normal people and we don’t deserve the hate."
            <br />
            <cite className={styles.cite}>- Wilbur, trans man (he/they)</cite>
          </blockquote>
        </div>

        <div className={styles.paragraph}>
          <p>
            Even if you don’t fully understand or believe that being genderqueer is biologically real, their feelings about both their gender identity and the negative impact of discrimination are undeniably real—and that alone is reason enough to support them. Supporting genderqueer people means creating a world where everyone is free to live authentically without fear. By creating an accepting environment, we protect genderqueer people and can make a life-saving difference.
          </p>
        </div>

        <div className={styles.feedbackSection}>
          <p>Thanks for scrolling to the end! Did you find this page informative or have feedback? We’d love to know!</p>
          <a href="/feedback" className={styles.button}>
            What did you think? This button links to a form.
          </a>
        </div>

      </main>
    </div>
  );
}
