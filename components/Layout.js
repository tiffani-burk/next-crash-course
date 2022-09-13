import styles from '../styles/Layout.module.css'

// children being passed in as props from _app.js
const Layout = ({ children }) => {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Howdy</h1>
            { children }
            </main>
        </div>
    )
}

export default Layout