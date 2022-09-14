import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

// children being passed in as props from _app.js
const Layout = ({ children }) => {
    return(
         <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout