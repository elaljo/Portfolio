import styles from './Contact.module.css'

type SocialContactProps = {
    image: string;
    label: string;
    link: string;
}
function Social_Contact({image, label, link} : SocialContactProps){
    return(
        <a className={styles.borderIcon} href={link} target="_blank" rel="noreferrer" aria-label={label}>
            <img src={image} alt={label} width={"60px"} height={"60px"} />
        </a>
    )
}
export default function Contact(){
  return(
    <div className = {styles.Contact_box} id='Contact'>
        <div className={styles.Contact_text}>Get in touch</div>
        <a className={styles.EmailBox} href="mailto:elaljooo@gmail.com">
            <img src="/email.png" alt='email-icon' className={styles.iconMail}/> Email me
        </a>
        <div className={styles.SocialConatcBox}>
            <Social_Contact image='/linkedin.png' label='LinkedIn' link='https://www.linkedin.com/in/mohamed-elalj-767472298/'/>
            <Social_Contact image='/Github.png' label='GitHub' link='https://github.com/elaljo'/>
            <Social_Contact image='/Instagram.png' label='Instagram' link='https://www.instagram.com/moelalj/'/>
            <Social_Contact image='/Whatsapp.png' label='Whatsapp' link='https://wa.me/212632717417'/>
        </div>
        <div className={styles.PhoneNumber}>
            Phone Number: +212 632717417
        </div>
        <div className={styles.lastdiv}>
            <a href="#top" >
                Back to Top
            </a>
            <>
                © 2025 Elalj Mohamed
            </>
        </div>
    </div>
  )
}