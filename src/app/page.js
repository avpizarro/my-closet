import Image from 'next/image'
import styles from './page.module.css'
import Outfit from '@/components/Outfit/Outfit'

export default function Home() {

  const outFitNum = [1, 2, 3, 4];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {outFitNum.map(x => <Outfit key = {x} />)}
      </section>
    </main>
  )
}
