import * as React from "react"

import "./index/reset.css"
import "./index/globals.css"
import logo from "./index/logo.svg"
import * as styles from "./index/index.module.css"

const IndexPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <figure className={styles.logo}>
        <img src={logo} alt="The Jone logo" className={styles.logoImage} />
      </figure>
      <section className={styles.credits}>
        <div className={styles.creditItem}>
          <div className={styles.credit}>written &amp; directed by</div>
          <div className={styles.creditName}>Jesse Pinho</div>
        </div>

        <div className={styles.creditItem}>
          <div className={styles.credit}>produced &amp; edited by</div>
          <div className={styles.creditName}>George Rodriguez</div>
        </div>

        <div className={styles.creditItem}>
          <div className={styles.credit}>
            cinematography &amp; production design by
          </div>
          <div className={styles.creditName}>Joyzel</div>
        </div>

        <div className={styles.creditItem}>
          <div className={styles.creditName}>COMING MAY 2022</div>
        </div>

        <div className={styles.creditItem}>
          <div className={styles.creditNames}>
            Katy Corbus &bull; Henry Hetz &bull; Sarah Keene
          </div>

          <div className={styles.credit}>
            featuring music by{" "}
            <span className={styles.creditNames}>Monika Mia</span>
          </div>

          <div className={styles.credit}>
            hair &amp; makeup by{" "}
            <span className={styles.creditNames}>Talia Ranier</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
