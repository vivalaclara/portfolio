import './about.css';
import { useTranslation } from 'react-i18next';
import clara from '../../assets/clara.webp';


export default function About(){
    const { t } = useTranslation();
    return(
        <>
        <section className='custom-about'>
            <h1 className='page-title'>{t('about.page')}</h1>
            <div className='about-container'>
            <div className='about-text'>
            <h1>{t('about.title')} <strong>Clara </strong></h1>
            <h2><strong> {t('about.sub')} </strong> React • Angular</h2>
            <h3> typescript • bootstrap • styled components • sass • redux</h3>
            <p> {t('about.text')}</p>
            </div>
            <div className='about-img'>
             <img src={clara} alt='' />
            </div>
            </div>
        </section>
        </>
    );
}