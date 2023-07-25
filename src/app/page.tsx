import { DEX } from '../components/dex'
import { WALLET } from '../components/wallet'
import styles from './page.module.css'

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
