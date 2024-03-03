import { useTranslation } from 'react-i18next';
import moon from '../../assets/moon.webp';
import './intro.css';

export default function Intro(){
    const { t } = useTranslation();
    return(
        <>
        <section className='custom-intro' id="home">
            <img src={moon} alt='' />
            <div className='intro-text'>
            <h1>{t('intro.welcome')}</h1>
            <h2>{t('intro.subtitle')} </h2>
            </div>
        </section>
        </>
    );
}