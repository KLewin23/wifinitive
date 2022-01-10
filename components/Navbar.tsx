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
                        <h4>Home</h4>
                    </a>
                    <a href={'/products'}>
                        <h4>Products</h4>
                    </a>
                    <a href={'/services'}>
                        <h4>Services</h4>
                    </a>
                    <a href={'/contact'}>
                        <h4>Contact</h4>
                    </a>
                    <a href={'/about'}>
                        <h4>About</h4>
                    </a>
                </div>
            ) : (
                <div>
                    <span />
                    <span />
                    <span />
                </div>
            )}
        </div>
    );
};

export default Navbar;
