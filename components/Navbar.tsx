import React, { useState } from 'react';
import Logo from './Logo';
import styles from '../styles/Components.module.css';
import useWindowWidth from './useWindowWidth';

const Links = ({ direction }: { direction: 'row' | 'column' }) => (
    <nav className={styles.links} style={{ flexDirection: direction }}>
        <a href={'/'}>
            <h5>Home</h5>
        </a>
        <a href={'/products'}>
            <h5>Products</h5>
        </a>
        <a href={'/services'}>
            <h5>Services</h5>
        </a>
        <a href={'/contact'}>
            <h5>Contact</h5>
        </a>
        <a href={'/about'}>
            <h5>About</h5>
        </a>
    </nav>
);

const Navbar = ({ mode }: { mode: 'light' | 'dark' }): JSX.Element => {
    const windowWidth = useWindowWidth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div
            className={styles.navbar}
            style={{
                color: mode === 'light' ? 'black' : 'white',
                borderBottom: dropdownOpen ? 'solid 1px #F5F5F5' : 'solid 1px transparent',
                backgroundColor: mode === 'light' ? '#F5F5F5' : '#242424',
            }}
        >
            <a href={'/'}>
                <Logo mode={mode === 'light' ? 'dark' : 'light'} />
            </a>
            {windowWidth > 850 ? (
                <Links direction={'row'} />
            ) : (
                <button
                    type={'button'}
                    className={`${styles.navIcon} ${dropdownOpen ? styles.open : ''} ${mode === 'light' ? styles.dark : ''}`}
                    onClick={() => {
                        document.body.style.overflowY = !dropdownOpen ? 'hidden' : 'unset';
                        document.body.style.height = !dropdownOpen ? '100vh' : 'unset';
                        setDropdownOpen(!dropdownOpen);
                    }}
                >
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </button>
            )}
            <div
                className={styles.dropdown}
                style={{
                    height: dropdownOpen ? '100vh' : '0',
                    color: mode === 'light' ? '#242424' : 'white',
                    backgroundColor: mode === 'light' ? '#F5F5F5' : '#242424',
                }}
            >
                <Links direction={'column'} />
            </div>
        </div>
    );
};

export default Navbar;
