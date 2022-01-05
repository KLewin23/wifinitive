import React from 'react';
import Logo from './Logo';
import styles from '../styles/Footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.section1}>
                <Logo mode={'light'} />
                <h4>
                    Driving Digital <br />
                    Transformation.
                </h4>
            </div>
            <div className={styles.section2}>
                <div>
                    <h4 className={styles.title}>WHAT WE DO</h4>
                    <a href={'/products'}>
                        <h4>Products</h4>
                    </a>
                    <a href={'/products'}>
                        <h4>Services</h4>
                    </a>
                </div>
                <div>
                    <h4 className={styles.title}>ABOUT</h4>
                    <a href={'/products'}>
                        <h4>About us</h4>
                    </a>
                    <a href={'/products'}>
                        <h4>Partners</h4>
                    </a>
                    <a href={'/products'}>
                        <h4>Terms of service</h4>
                    </a>
                    <a href={'/products'}>
                        <h4>Privacy policy</h4>
                    </a>
                </div>
                <div>
                    <h4 className={styles.title}>CONTACT</h4>
                    <a href={'/contact'}>
                        <h4>Contact us</h4>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
