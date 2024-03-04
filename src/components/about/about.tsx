import './about.css';
import { useTranslation } from 'react-i18next';
import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import clara from '../../assets/clara.webp';


export default function About(){
    const { t } = useTranslation();
    return(
        <>
        <section className='custom-about' id="about">
            <h1 className='page-title'>{t('about.page')}</h1>
            <div className='about-container'>
            <div className='about-text'>
            <h1>{t('about.title')} <strong>Clara </strong></h1>
            <h2><strong> {t('about.sub')} </strong> React • Angular</h2>
            <h3> typescript • bootstrap • styled components • sass • redux</h3>
            <p> {t('about.text')}</p>
            <h2 id='social-title'>{t('about.social')}</h2>
            <div className='social'> 
                <Link className='link-social' target='_blank' to="https://www.linkedin.com/in/clara-maestri-681352210/" aria-label={t('redirects.linkedin')}>
                        <LinkedinLogo className='icon-social' size={50} weight="fill" />
                 </Link>

                <Link className='link-social' target='_blank' to="https://github.com/vivalaclara" aria-label={t('redirects.github')}>
                    <GithubLogo className='icon-social' size={50} weight="fill" />
                </Link>
            </div>
            </div>
            <div className='about-img'>
             <img src={clara} alt={t('about.alt')} loading='lazy' />
            </div>
            </div>
        </section>
        </>
    );
}