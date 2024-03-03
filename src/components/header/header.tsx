import { useState } from 'react';
import './header.css';
import { MoonStars, LinkedinLogo, GithubLogo, List } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 

export default function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <header className='header-container'>
            < div className='custom-header'>
                <div className='languages'>
                    <button onClick={() => changeLanguage('pt')}>PT</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
                <div className='logo'>
                    <MoonStars className='icon' size={25} weight="fill" />
                    <span> • Clara Maestri</span>
                </div>
                <div className='socials'>
                    <Link className='link-dom' target='blank' to="https://www.linkedin.com/in/clara-maestri-681352210/" aria-label={t('redirects.linkedin')}>
                        <LinkedinLogo className='icon' size={20} weight="fill" />
                    </Link>
                    <Link className='link-dom' target='blank' to="https://github.com/vivalaclara" aria-label={t('redirects.github')}>
                        <GithubLogo className='icon' size={20} weight="fill" />
                    </Link>
                    <button className='menu-toggle' onClick={toggleMenu}>
                        <List className='icon' size={25} weight="fill" />
                    </button>
                </div>
            </div>
            <section className='menu-sec'>
            {isMenuOpen && (
                <div className='menu'>
                    <a className='hrefs' href='#home'>{t('menu.home')}</a>
                    <a className='hrefs' href='#projects'>{t('menu.projects')}</a>
                    <a className='hrefs' href="#about">{t('menu.about')}</a>
                </div>
            )}
            </section>
        </header>
    );
}

