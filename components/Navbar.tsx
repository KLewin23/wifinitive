import React from 'react';
import Logo from './Logo';
import styles from '../styles/Components.module.css';
import useWindowWidth from './useWindowWidth';

const Navbar = ({ mode }: { mode: 'light' | 'dark' }): JSX.Element => {
    const windowWidth = useWindowWidth();

    return (
        <div
            className={styles.navbar}
            style={{
                backgroundColor: mode === 'light' ? 'white' : '#242424',
            }}
        >
            <Logo mode={mode === 'light' ? 'dark' : 'light'} />
            {windowWidth > 850 ? (
                <div className={styles.links}>
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
            ) : (
                <div className={styles.navIcon}>
                    <div />
                    <div />
                    <div />
                </div>
            )}
        </div>
    );
};

export default Navbar;
