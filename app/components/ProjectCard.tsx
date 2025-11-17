"use client"
import styles from './Projects.module.css'
import { useState, useEffect } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  techUsed: string[];
  video?: string;
  Githublink: string;
};

export default function ProjectCard({ title, description, image, techUsed, video, Githublink}: ProjectCardProps) {
  return(
    <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          {video ? ( <video src={video} muted autoPlay loop playsInline />) : ( image && <img src={image} alt={title} />)}
        </div>
        <div className={styles.projectTitle}> {title} </div>
        <div className={styles.projectDescription_techused}>
            <div className={styles.projectDescription}>{description}</div>
            <div className={styles.projectTechused}>
                {techUsed.map((tech, index) => (
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
        <a href={Githublink} target="_blank" rel="noopener noreferrer" className={styles.projectExplore}> View Project on Github <img src="/arrow.svg" alt="arrow" height={"20px"} width={"20px"}/> </a>
    </div>
  )
}