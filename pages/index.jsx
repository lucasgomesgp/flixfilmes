import BackgroundInitialItem from '../components/BackgroundInitialItem'
import Menu from '../components/Menu'
import MinhaLista from '../components/MinhaLista'
import { ContextProvider } from '../hooks/useContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ContextProvider>
        <Menu />
        <BackgroundInitialItem />
        <MinhaLista />
      </ContextProvider>
    </div>
  )
}
