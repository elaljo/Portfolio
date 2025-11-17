import styles from './Nav_bar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.nav_bar} id='top'>
            <div className={styles.logo}> <img src="/Logo.png" alt="Logo" /></div>
            <div>
                <ul className={styles.sections}>
                    <li> <a href="#about"> About </a> </li>
                    <li> <a href="#Projects"> Projects </a> </li>
                    <li> <a href="#Contact"> Contact </a> </li>
                </ul>
            </div>
            <a href="/Mohamed_Elalj_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.myresume}>
                <div className={styles.resume}>My Resume</div>
                <div className={styles.resume_box}> <img className={styles.arrow} src="/arrow.svg" alt="arrow" height={"20px"} width={"20px"}/></div>
            </a>
        </nav>
    )
}