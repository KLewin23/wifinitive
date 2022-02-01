import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { Footer, Navbar, useWindowWidth } from '../components';
import styles from '../styles/contact.module.css';

const Contact = (): JSX.Element => {
    const windowWidth = useWindowWidth();
    const { register, handleSubmit } = useForm();

    return (
        <>
            <Head>
                <title>Wifinitive</title>
                <meta name={'description'} content={'Wifinitive website - homepage'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main className={styles.main}>
                <Navbar mode={'dark'} />
                <div className={styles.container}>
                    <div className={styles.topBars}>
                        <span />
                        <span />
                    </div>
                    <section className={styles.header}>
                        <h1>
                            Contact
                            <br />
                            Our&nbsp;Team
                        </h1>
                        <h6>Get in touch today to see how Wifinitive can help with your digital transformation.</h6>
                    </section>
                    <section className={styles.form}>
                        <form onSubmit={handleSubmit(() => null)}>
                            <div>
                                <div className={styles.inputs}>
                                    <label htmlFor={'name'}>
                                        <h6>Your Name</h6>
                                        <input id={'name'} type={'text'} {...register('name')} />
                                    </label>
                                    <label htmlFor={'email'}>
                                        <h6>Your Email</h6>
                                        <input id={'email'} type={'text'} {...register('email')} />
                                    </label>
                                    <label htmlFor={'phoneNumber'}>
                                        <h6>Phone Number</h6>
                                        <input id={'phoneNumber'} type={'text'} {...register('phoneNumber')} />
                                    </label>
                                    <div>
                                        <label htmlFor={'company'}>
                                            <h6>Your Company</h6>
                                            <input id={'company'} type={'text'} {...register('company')} />
                                        </label>
                                        <label htmlFor={'position'}>
                                            <h6>Position</h6>
                                            <input id={'position'} type={'text'} {...register('position')} />
                                        </label>
                                    </div>
                                    <label htmlFor={'topic'}>
                                        <h6>Topic</h6>
                                        <input id={'topic'} type={'text'} {...register('topic')} />
                                    </label>
                                    <label htmlFor={'topic'}>
                                        <h6>Message</h6>
                                        <textarea id={'topic'} {...register('topic')} rows={5} />
                                    </label>
                                </div>
                                <div className={styles.information}>
                                    <h5 className={styles.heading}>Out Information</h5>
                                    <h5>
                                        <span className={styles.heading}>General Enquiries:</span> <br /> info@wifinitive.com
                                    </h5>
                                    <h5>
                                        <span className={styles.heading}>Existing Customers:</span> <br /> support@teconica.com
                                    </h5>
                                    <h5>
                                        <span className={styles.heading}>Our Address:</span> <br /> Granville Hall, 11 Granville Road,
                                        <br /> Leicester
                                        <br /> LE1 7RU, United Kingdom
                                    </h5>
                                </div>
                            </div>
                            <button type={'submit'}>
                                <h6>Send</h6>
                            </button>
                        </form>
                        <div className={styles.lowerBars}>
                            <span />
                            {windowWidth < 850 ? <span /> : null}
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Contact;

//                     <span />
//                     {windowWidth < 850 ? <span /> : null}
