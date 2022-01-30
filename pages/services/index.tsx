import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import styles from '../../styles/services/index.module.css';
import OurServices from '../../public/ourServices.svg';
import useWindowWidth from '../../components/useWindowWidth';
import Footer from '../../components/Footer';

const Index = (): JSX.Element => {
    const windowWidth = useWindowWidth();
    return (
        <>
            <Head>
                <title>Wifinitive</title>
                <meta name={'description'} content={'Wifinitive website - homepage'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main className={styles.main}>
                <Navbar mode={'light'} />
                <div className={styles.header}>
                    <Image src={OurServices} layout={'fill'} objectPosition={'top'} objectFit={'cover'} className={styles.headerImage} />
                    <h1>
                        Our <br /> Services
                    </h1>
                    <h5>Redefine your business by building the platform needed for transformation.</h5>
                </div>
                <div className={styles.videoSection}>
                    <div>
                        <h3>
                            <span>Cloud</span> Services
                        </h3>
                        <h5>
                            Teconica Cloud Services offer innovative solutions for enterprises looking to streamline their cloud offerings and
                            modernize their applications. Make the cloud work for you and create new business opportunities to generate profit and
                            growth.
                        </h5>
                        <a href={'/services/cloud'}>Learn more</a>
                    </div>
                    {windowWidth > 850 ? (
                        <div>
                            <svg width={422} height={257} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
                                <path fill={'#C4C4C4'} d={'M0 0h422v257H0z'} />
                                <g clipPath={'url(#a)'}>
                                    <path
                                        d={
                                            'M236.684 120.923 195.34 95.437c-2.991-1.841-6.607-1.918-9.674-.204-3.066 1.713-4.897 4.833-4.897 8.345v50.738c0 5.311 4.279 9.655 9.539 9.684h.043c1.643 0 3.356-.515 4.956-1.491a2.729 2.729 0 0 0-2.843-4.661c-.749.457-1.479.693-2.127.693-1.984-.011-4.109-1.711-4.109-4.225v-50.738a4.05 4.05 0 0 1 2.101-3.58 4.049 4.049 0 0 1 4.148.088l41.344 25.485a4.02 4.02 0 0 1 1.95 3.5c-.003 1.459-.719 2.732-1.969 3.494l-29.891 18.303a2.73 2.73 0 1 0 2.85 4.655l29.889-18.3a9.495 9.495 0 0 0 4.581-8.141 9.496 9.496 0 0 0-4.547-8.159Z'
                                        }
                                        fill={'#A0A0A0'}
                                    />
                                </g>
                                <defs>
                                    <clipPath id={'a'}>
                                        <path fill={'#fff'} transform={'translate(176 94)'} d={'M0 0h70v70H0z'} />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    ) : null}
                </div>
                <div className={styles.digitalServices}>
                    <h3>Digital Services</h3>
                    <h5>
                        Your Digital Footprint needs to be substantial and decisive; Minor iterations at the edge is no longer enough. Every
                        organisation benefits from a digital presence and its effects and opportunities are maximised with a thorough deployment.
                    </h5>
                    <a href={'/services/digital'}>Learn more</a>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Index;
