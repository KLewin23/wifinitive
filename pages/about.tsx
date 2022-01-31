import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Footer, Logo, Navbar, useWindowWidth } from '../components';
import { AboutBars, AboutBars2, AboutBars3, Asanti, Discuss, Door, Good, Lock, Shield, Stars } from '../public';
import styles from '../styles/about.module.css';

const About = (): JSX.Element => {
    const windowWidth = useWindowWidth();
    return (
        <>
            <Head>
                <title>About Wifinitive</title>
                <meta name={'description'} content={'Wifinitive website - about'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main className={styles.main}>
                <Navbar mode={'light'} />
                <section className={styles.header}>
                    <div className={styles.bars}>
                        <Image src={AboutBars} layout={'fixed'} />
                    </div>
                    <h1>
                        About
                        <br />
                        Us
                    </h1>
                    <h5>Wifinitive is a dynamic company for technology consultancy and services.</h5>
                </section>
                <section>
                    <h6 className={styles.textBlock}>
                        Wifinitive provides solutions around pre-existing software and solutions while also providing innovative new products and
                        services. Wifinitive monitors the forefront of new technologies to ensure our service stays ahead of the curve, no matter the
                        industry, allowing us to be proactive rather than reactive.
                    </h6>
                </section>
                <section className={styles.assocBrands}>
                    <h3>Associated Brands</h3>
                    <div>
                        <div>
                            <Logo mode={'light'} />
                            <h6>Wifinitive provides data centre co-location and connectivity services.</h6>
                        </div>
                        <div>
                            <Image src={Asanti} layout={'fixed'} height={42} width={176} />
                            <h6>Asanti is apart of the Wifinitive family and provides data centre consultancy and co-location services.</h6>
                        </div>
                    </div>
                </section>
                <div style={{ position: 'relative' }}>
                    <section className={styles.itemGrid} style={{ zIndex: windowWidth > 850 ? 0 : 15 }}>
                        <h6>
                            Wifinitive supports our clients globally to help adapt to new innovation and transform their business in the digital age.
                            We pride ourselves on our foundation beliefs. These act as the driving force behind the company and ensure we maintain our
                            corporate responsibilities.
                        </h6>
                        <div className={styles.grid}>
                            <div>
                                <Image src={Shield} layout={'fixed'} height={48} width={48} />
                                <h6>
                                    Safe, enjoyable workspaces for our employees. We aim to maintain employee independence and uniqueness, and provide
                                    options for work environments to keep our employees happy.
                                </h6>
                            </div>
                            <div>
                                <Image src={Lock} layout={'fixed'} height={48} width={48} />
                                <h6>
                                    Privacy and Security of our customers and employees is paramount. When clients trust us with their projects and
                                    data, we maintain that respect at the highest level possible.
                                </h6>
                            </div>
                            <div>
                                <Image src={Door} layout={'fixed'} height={48} width={48} />
                                <h6>We operate an open-door policy, and transparency for all our employees is incredibly important.</h6>
                            </div>
                            <div>
                                <Image src={Good} layout={'fixed'} height={48} width={48} />
                                <h6>Our employees work for the betterment of our clients, we aim to provide a quality, consistent service.</h6>
                            </div>
                            <div>
                                <Image src={Discuss} layout={'fixed'} height={48} width={48} />
                                <h6>
                                    Identifying individual customer or employee needs and truly understanding them allows us to provide the best
                                    service possible.
                                </h6>
                            </div>
                            <div>
                                <Image src={Stars} layout={'fixed'} height={48} width={48} />
                                <h6>Work/Life balance is important, we want our employees to work hard, but also play hard.</h6>
                            </div>
                        </div>
                    </section>
                    <section className={styles.cloudJourney}>
                        {windowWidth > 850 ? <Image className={styles.aboutBars3} src={AboutBars3} layout={'fixed'} /> : null}
                        <div>
                            <h3>Start your cloud journey</h3>
                            <h5>
                                Join the ranks of our <br /> world wide customers
                            </h5>
                            <a href={'/contact'}>
                                <h6>Contact us</h6>
                            </a>
                        </div>
                    </section>
                    <Image className={styles.aboutBars2} src={AboutBars2} layout={'fill'} objectPosition={'right'} objectFit={'contain'} />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default About;
