import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Footer(){
    const { t } = useTranslation();
    
    return(
        <footer className='custom-footer'>
            <p> {t('footer.message')} 
            <Link className='link-footer' target='blank' to="https://github.com/vivalaclara" aria-label={t('redirects.github')}>
                   Clara Maestri
                </Link>
            </p>
        </footer>
    );
}