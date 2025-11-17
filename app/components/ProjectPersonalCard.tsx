import styles from './Projects.module.css'

type ProjectPesonalProps = {
    title: string;
    description: string;
    video: string;
    techUsed: string[];
}

export default function ProjectPersonalCard({title, description, video, techUsed} : ProjectPesonalProps){
    return(
        <>
            <div className={styles.P_title}> {title} </div>
            <div className={styles.P_video}>
                <video src={video} muted autoPlay loop  playsInline></video>
            </div>
            <div className={styles.P_descriptionTechUsed}>
                <div className={styles.P_description}> {description} </div>
                <div className={styles.P_TechUsed}>
                    {techUsed.map((tech, index) =>(
                        <img
                        key={index}
                        src={tech}
                        alt={tech}
                        height="40px"
                        width="40px"
                        />
                    ))}
                </div>
            </div>
        </>

    )
}