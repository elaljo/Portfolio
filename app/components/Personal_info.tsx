import styles from './Personal_info.module.css'

export default function PersonalInfo(){
    return(
        <div className={styles.personal_box} id="about">
            <div className={styles.Info_box}>
                <div className={styles.Peronal_info}>
                    <div className={styles.Title}> SOFTWARE ENGINEER </div>
                    <div className={styles.greeting}> Hey, I'm Elalj Mohamed! </div>
                    <div className={styles.description}>I’m a 22-year-old frontend developer and designer from Morocco. I focus on building clean, responsive web applications and integrating AI to make interfaces smarter and more engaging. I’m always exploring new technologies and pushing my craft forward to bring ideas to life through thoughtful design and code.</div>
                </div>
                <div className={styles.Tech_info}>
                    <div className={styles.Tech_Title}>TECHNOLOGIES I'VE WORKED WITH</div>
                    <div className={styles.Tech_Icon}>
                        <img src="/Tech_Icons/JavaScript.svg" alt="JavaScript.icon" />
                        <img src="/Tech_Icons/TypeScript.svg" alt="TypeScript.icon"/>
                        <img src="/Tech_Icons/React.svg" alt="React.icon"/>
                        <img src="/Tech_Icons/HTML5.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/CSS3.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/Next.js.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/Python.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/Flask.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/FastAPI.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/C++.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/C.svg" alt="C.icon"/>
                        <img src="/Tech_Icons/Figma.svg" alt="Python.icon"/>
                        <img src="/Tech_Icons/Git.svg" alt="Python.icon"/>
                    </div>
                </div>
            </div>
            <div className={styles.My_Image}>
                <img src="/Me.png" alt="MyImage" />
            </div>
        </div>
    )
}