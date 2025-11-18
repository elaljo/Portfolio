import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import ProjectPersonalCard from './ProjectPersonalCard'

export default function Projects(){
    return(
        <div className={styles.School_Projects} id='Projects'>
            <div className={styles.title_description}>
                <div className={styles.title}> <img src="/school.svg" alt="school-icon" height={"40px"} width={"40px"}/> 1337 Projects</div>
                <div className={styles.description}>Some of the projects I worked on at 1337 Coding School</div>
            </div>
            <div className={styles.Projects}>
                <ProjectCard 
                    title='ft_Transcendence'
                    description='Development of a complete web application in a team, combining an interactive interface (multiplayer Pong game, chat, social system) with a robust and secure backend. This project helped consolidate my skills in full stack web development, software architecture, and agile team management.'
                    video={'/Projects_photos/Transcendence.mp4'}
                    techUsed={['/Tech_Icons/JavaScript.svg', '/Tech_Icons/HTML5.svg', '/Tech_Icons/CSS3.svg', '/Tech_Icons/Git.svg',]}
                    Githublink='https://github.com/haguezoum/Messa-Pong'

                />
                   <ProjectCard 
                    title='Cub3d'
                    description='This project is inspired by the world-famous Wolfenstein 3D game, which was the first FPS ever. It will enable you to explore ray-casting. Your goal will be to make a dynamic view inside a maze, in which you’ll have to find your way. It’s implemented in C using the raycasting technique and the MiniLibX library.'
                    image={'/Projects_photos/Cub3d.png'}
                    techUsed={['/Tech_Icons/C.svg', '/Tech_Icons/42MLX.png', '/Tech_Icons/Git.svg']}
                    Githublink='https://github.com/elaljo/Cub3d'
                />
            </div>
            <div className={styles.Projects}>
                <ProjectCard 
                    title='Minishell'
                    description='Development of a simplified Bash shell in a terminal environment, including command parsing, PATH execution, redirections, pipes, signal handling, and built-in commands, while ensuring stable behavior, efficient process management, and clean, maintainable code architecture.'
                    image={'/Projects_photos/Minishell.png'}
                    techUsed={['/Tech_Icons/C.svg', '/Tech_Icons/bash.svg', '/Tech_Icons/Git.svg',]}
                    Githublink='https://github.com/elaljo/minishell_'

                />
                   <ProjectCard 
                    title='Inception'
                    description=' Design and implementation of a secure multi-service system using Docker for Nginx, WordPress, and MariaDB, orchestrated with Docker Compose. Service isolation, resource optimization, and secure communication setup. Implementation of DevOps practices to facilitate deployment, maintenance, and scaling of the system.'
                    image={'/Projects_photos/Docker.jpg'}
                    techUsed={['/Tech_Icons/Docker.svg', '/Tech_Icons/wordpress.svg', '/Tech_Icons/mariaDB.svg', '/Tech_Icons/nginx.svg']}
                    Githublink='https://github.com/elaljo/Inception/tree/main'
                />
            </div>
            <div className={styles.Personal_Projects}>
                <div className={styles.title}> <img src="/personal.svg" alt="personal-icon" height={"30px"} width={"30px"}/> Personal Projects</div>
                <div className={styles.description}> A collection of side projects i've worked on</div>
                <div className={styles.Projects_personal}>
                    <ProjectPersonalCard
                        title='F1HUB AI'
                        description='Development of a dynamic Formula 1 news web application using Next.js and TypeScript. The project involved integrating live news APIs, implementing team-specific news filtering with dynamic theming, and adding an interactive ChatGPT-powered assistant for article insights and related content. Focused on responsive design, user engagement, and seamless data interaction while following best practices for modern web development.'
                        video='/Projects_photos/F1 Video.mp4'
                        techUsed={['/Tech_Icons/TypeScript.svg', '/Tech_Icons/React.svg', '/Tech_Icons/CSS3.svg', '/Tech_Icons/Next.js.svg']}
                    />
                </div>
            </div>
        </div>
    )
}