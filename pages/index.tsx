import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../lib/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Base64</title>
        <meta name="description" content="Base64" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`pagewidth ${styles.main}`}>

        <div className={styles.gridHalves}>
          <div>
            <h2 className={styles.h2}>Blockchain & Web3</h2>
            <p className={styles.p}>Base64 promotes web3 principals to empower teams with optimized strategies that act as accelerators for their NFT projects. We provide a community incubator where artists and developers can collaborate on their ideas with the support of a team of NFT veterans.</p>
            {/* <p className={styles.p}>Check out our latest projects.</p> */}
          </div>
          <div>
            <img src="/assets/img/asset-1.svg" />
          </div>


          <div>
            <img src="/assets/img/asset-2.svg" />
          </div>
          <div>
            <p className={`text-uppercase ${styles.p}`}>OUR AIM IS</p>
            <h2 className={styles.h2}>Bespoke Crypto Experiences</h2>
            {/* <p className={styles.p}>We deliver an overall solution including:</p> */}
            <p className={styles.p}>
              Base64 wants to curate and create best-of-class user experiences, whether working with partners or on our own endeavors. Everyone shall be an enjoyooooorrr!
            </p>
          </div>

        </div>

        <div className={`m-y-6`}>
            <p className={`text-uppercase text-center ${styles.p}`}>Our Value</p>
            <h2 className={`text-center ${styles.h2}`} style={{ marginBottom: '4rem' }}>What We Offer</h2>
            <div className={styles.gridThirds}>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Go-to-market Strategy</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Resilient strategies to help your team adjust and stay ahead of the fast pace of NFTs. Full spectrum approaches that evaluate every critical element of your project, and provide both battle tested and innovative solutions.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Technology</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Helping teams by providing secure, gas-reduced, and fully optimized solutions that are fit for purpose on mint day, and provide a strong foundation for sustainability and scale into the future.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Business Strategy</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Bootstrap your ecosystem through partnerships that mutually build on your combined brand. Pursue collaborations to strengthen your tokenomics design, and support a robust circular economy that brings value to all participants.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Gaming</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Build game designs and puzzles that are interactive and fun, engage the NFT holder through community, and extend into the Metaverse.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Community</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Create community engagement strategies that feature organic growth, community incentives, and promote loyalty to the brand. All media forms are addressed to ensure maximum exposure across Discord, Twitter, Website and other mediums of user interaction.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>Art</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Direction on emergent art styles preferred by the NFT community, generative patterns and practices, and asset hosting tradeoffs.</p>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: 'transparent' }}></div>
              <div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardHeading}>DeFi</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>DeFi2 architectures that embrace market equilibrium and mutual incentive principles for all participants. Avoid mercenary tactics by building them out of your initial designs with proven strategies.</p>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: 'transparent' }}></div>
            </div>
        </div>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Base64
        </a>
      </footer>
    </>
  )
}

export default Home
