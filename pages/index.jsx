import Menu from '../components/Menu'
import MinhaLista from '../components/MinhaLista'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <MinhaLista />
    </div>
  )
}
