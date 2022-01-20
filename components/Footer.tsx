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
                    <a href={'/products'}>
                        <h6>Products</h6>
                    </a>
                    <a href={'/products'}>
                        <h6>Services</h6>
                    </a>
                </div>
                <div>
                    <h6 className={styles.title}>ABOUT</h6>
                    <a href={'/products'}>
                        <h6>About us</h6>
                    </a>
                    <a href={'/products'}>
                        <h6>Partners</h6>
                    </a>
                    <a href={'/products'}>
                        <h6>Terms of service</h6>
                    </a>
                    <a href={'/products'}>
                        <h6>Privacy policy</h6>
                    </a>
                </div>
                <div>
                    <h6 className={styles.title}>CONTACT</h6>
                    <a href={'/contact'}>
                        <h6>Contact us</h6>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
