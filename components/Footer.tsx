import React from 'react';
import Logo from './Logo';
import styles from '../styles/Footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.section1}>
                <Logo mode={'light'} />
                <h6>
                    Driving Digital <br />
                    Transformation.
                </h6>
            </div>
            <div className={styles.section2}>
                <div>
                    <h6 className={styles.title}>WHAT WE DO</h6>
                    <a href={'/products'}>Products</a>
                    <a href={'/products'}>Services</a>
                </div>
                <div>
                    <h6 className={styles.title}>ABOUT</h6>
                    <a href={'/products'}>About us</a>
                    <a href={'/products'}>Partners</a>
                    <a href={'/products'}>Terms of service</a>
                    <a href={'/products'}>Privacy policy</a>
                </div>
                <div>
                    <h6 className={styles.title}>CONTACT</h6>
                    <a href={'/contact'}>Contact us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
