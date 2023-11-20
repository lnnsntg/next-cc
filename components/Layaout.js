import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header.js'

export default function Layaout ({ children }) {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}
