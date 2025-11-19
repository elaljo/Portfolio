import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import ProjectPersonalCard from './ProjectPersonalCard'

export default function Projects(){
    return(
        <div className={styles.School_Projects} id='Projects'>
            <div className={styles.title_description}>
                <div className={styles.title}> Projects </div>
                <div className={styles.description}>Here are some of the projects I’ve developed.</div>
            </div>
            <div className={styles.Projects}>
                   <ProjectCard 
                    title='F1HUB AI'
                    description='Development of a dynamic Formula 1 news web application using Next.js and TypeScript. The project involved integrating live news APIs, implementing team-specific news filtering with dynamic theming, and adding an interactive ChatGPT-powered assistant for article insights and related content. Focused on responsive design, user engagement, and seamless data interaction while following best practices for modern web development.'
                    video='/Projects_photos/F1 Video.mp4'
                    techUsed={['/Tech_Icons/Next.js.svg', '/Tech_Icons/TypeScript.svg', '/Tech_Icons/React.svg', '/Tech_Icons/CSS3.svg', '/Tech_Icons/Git.svg']}
                    Githublink='https://github.com/elaljo/F1-AINews'
                />
                <ProjectCard 
                    title='ft_Transcendence'
                    description='Development of the frontend and design of a complete web application, focusing on an interactive and engaging user interface featuring a multiplayer Pong game, chat system, and social interactions. Collaborated with partners to implement parts of the backend, gaining experience in full-stack integration while strengthening my skills in frontend development, UI/UX design, and teamwork.'
                    video={'/Projects_photos/Transcendence.mp4'}
                    techUsed={['/Tech_Icons/JavaScript.svg', '/Tech_Icons/HTML5.svg', '/Tech_Icons/CSS3.svg', '/Tech_Icons/Git.svg',]}
                    Githublink='https://github.com/haguezoum/Messa-Pong'

                />
            </div>
            <div className={styles.Projects}>
                <ProjectCard 
                    title='ChatBot'
                    description=' Created a fully functional AI-powered chatbot web application using Flask and Python, seamlessly integrated with the OpenAI API and advanced function-calling capabilities for dynamic, context-aware responses. Designed and developed a clean, responsive frontend using HTML, CSS, and JavaScript.'
                    image={'/Projects_photos/ChatBot.png'}
                    techUsed={['/Tech_Icons/JavaScript.svg', '/Tech_Icons/HTML5.svg', '/Tech_Icons/CSS3.svg', '/Tech_Icons/Python.svg', '/Tech_Icons/Flask.svg' ,'/Tech_Icons/Git.svg']}
                    Githublink='https://github.com/elaljo/ChatBot'

                />
                <ProjectCard 
                    title='Inception'
                    description=' Design and implementation of a secure multi-service system using Docker for Nginx, WordPress, and MariaDB, orchestrated with Docker Compose. Service isolation, resource optimization, and secure communication setup. Implementation of DevOps practices to facilitate deployment, maintenance, and scaling of the system.'
                    image={'/Projects_photos/Docker.jpg'}
                    techUsed={['/Tech_Icons/docker.svg', '/Tech_Icons/wordpress.svg', '/Tech_Icons/mariaDB.svg', '/Tech_Icons/nginx.svg']}
                    Githublink='https://github.com/elaljo/Inception/tree/main'
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
                    title='Cub3d'
                    description='This project is inspired by the world-famous Wolfenstein 3D game, which was the first FPS ever. It will enable you to explore ray-casting. Your goal will be to make a dynamic view inside a maze, in which you’ll have to find your way. It’s implemented in C using the raycasting technique and the MiniLibX library.'
                    image={'/Projects_photos/Cub3d.png'}
                    techUsed={['/Tech_Icons/C.svg', '/Tech_Icons/42MLX.png', '/Tech_Icons/Git.svg']}
                    Githublink='https://github.com/elaljo/Cub3d'
                />
           
            </div>
        </div>
    )
}