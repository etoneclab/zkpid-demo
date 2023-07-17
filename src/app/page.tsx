import { DEX } from '../components/dex'
import styles from './page.module.css'
import { WALLET } from '../components/wallet'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.dexarea}>
        <DEX />
      </section>
      <section className={styles.walletarea}>
        <WALLET />
      </section>
    </main>
  )
}
