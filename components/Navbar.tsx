import React, { useState } from 'react';
import Logo from './Logo';
import styles from '../styles/Components.module.css';
import useWindowWidth from './useWindowWidth';

const Links = ({ direction }: { direction: 'row' | 'column' }) => (
    <div className={styles.links} style={{ flexDirection: direction }}>
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
    </div>
);

const Navbar = ({ mode }: { mode: 'light' | 'dark' }): JSX.Element => {
    const windowWidth = useWindowWidth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div
            className={styles.navbar}
            style={{
                borderBottom: dropdownOpen ? 'solid 1px white' : 'solid 1px transparent',
                backgroundColor: mode === 'light' ? 'white' : '#242424',
            }}
        >
            <Logo mode={mode === 'light' ? 'dark' : 'light'} />
            {windowWidth > 850 ? (
                <Links direction={'row'} />
            ) : (
                <button
                    type={'button'}
                    className={`${styles.navIcon} ${dropdownOpen ? styles.open : ''}`}
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
            <div className={styles.dropdown} style={{ height: dropdownOpen ? '100vh' : '0' }}>
                <Links direction={'column'} />
            </div>
        </div>
    );
};

export default Navbar;
