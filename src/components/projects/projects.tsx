import { useState } from 'react';
import './projects.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import projectsData from './array';



export default function Projects() {
    const { t } = useTranslation();
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

   
    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <section className='custom-section' id="projects">
            <h1>{t('projects.page')}</h1>
            <div className='projects-container'>
                <div className='project-item'>
                    <img className='project-img' src={projectsData[currentProjectIndex].imageUrl} alt={t('projects.alt')} />
                    <div className='project-description'>
                        <h2>{projectsData[currentProjectIndex].name}</h2>
                        <h3>{t(`projects.${projectsData[currentProjectIndex].collab}`)}</h3>
                        <p>{t(`projects.${projectsData[currentProjectIndex].description}`)}</p>
                        <Link className='link-project' target='blank' to={projectsData[currentProjectIndex].link}>
                            <button>LINK</button>
                        </Link>
                    </div>
                </div>
                
                <button onClick={handlePreviousProject}>Previous</button> 
                
                <button onClick={handleNextProject}>Next</button>
            </div>
        </section>
    );
}