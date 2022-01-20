import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
    const [hoveredTile, setHoveredTile] = useState<null | number>(null);
    const quarterTiles = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Head>
                <title>Wifinitive</title>
                <meta name={'description'} content={'Wifinitive website - homepage'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main>
                <Navbar mode={'dark'} />
                <div className={styles.quarterTiles} ref={quarterTiles}>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(0)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2>Decahedra</h2>
                            <p>Delivering Scalable and Secure Data Centre Solutions Across Europe, Asia and Africa.</p>
                            <a href={'/decahedra'}>Learn more</a>
                        </div>
                        <div className={styles.slide1} style={{ transform: hoveredTile === 0 ? `rotate(-36deg) scaleX(2.7)` : `rotate(-36deg)` }} />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(1)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2>Consultancy</h2>
                            <p>Utilise our world-class team for your next project and benefit from lower costs and full support.</p>
                            <a href={'/consultancy'}>Learn more</a>
                        </div>
                        <div className={styles.slide2} style={{ transform: hoveredTile === 1 ? `rotate(-36deg) scaleX(2.7)` : `rotate(-36deg)` }} />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(2)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2>IT Management</h2>
                            <p>On Premises or Remote IT Contracting for your platforms and services.</p>
                            <a href={'/it-management'}>Learn more</a>
                        </div>
                        <div className={styles.slide3} style={{ transform: hoveredTile === 2 ? 'rotate(-36deg) scaleX(3.3)' : 'rotate(-36deg)' }} />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(3)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2>Decahedra Cloud</h2>
                            <p>
                                The Cloud Hosting Platform for Developers. Revolutionary Infrastructure at Competitive Pricing to be your trusted
                                cloud partner for your future.
                            </p>
                            <a href={'/decahedra-cloud'}>Learn more</a>
                        </div>
                        <div className={styles.slide4} style={{ transform: hoveredTile === 3 ? 'rotate(-36deg) scaleX(3.3)' : 'rotate(-36deg)' }} />
                    </div>
                </div>
                <div className={styles.statsContainer}>
                    <div style={{ maxWidth: '450px' }}>
                        <h4 style={{ fontWeight: 'normal', marginBottom: '2rem' }}>
                            We&apos;re built around the goal of reducing costs, maximizing support, and easing the path for groundbreaking IT
                            software.
                        </h4>
                        <h5>
                            We work with our clients to bring forward-thinking solutions to their modern dilemmas and optimize their unique results.
                        </h5>
                    </div>
                    <div className={styles.stats}>
                        <div>
                            <h3>&gt;200k</h3>
                            <h6>
                                Deliverable data <br /> centre space&nbsp;(sq&nbsp;ft)
                            </h6>
                        </div>
                        <div>
                            <h3>3</h3>
                            <h6>
                                UK Regional cloud
                                <br />
                                deployments
                            </h6>
                        </div>
                        <div>
                            <h3>8</h3>
                            <h6>Industries served</h6>
                        </div>
                        <div>
                            <h3>Global</h3>
                            <h6>Support and partner structure</h6>
                        </div>
                    </div>
                </div>
                <div className={styles.cloudServices}>
                    <div className={styles.csBarWrapper}>
                        <div className={styles.csColourBar1} />
                        <div className={styles.csColourBar2} />
                    </div>
                    <div className={styles.csTextWrapper}>
                        <h3>Cloud Services</h3>
                        <h6>
                            Utilize our unlimited cloud storage options for your services and applications- keeping you ahead of the competition and
                            keeping your business on track for success.
                        </h6>
                        <h6 style={{ marginTop: '20%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed odio viverra adipiscing.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Faucibus sed odio viverra adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Faucibus sed odio viverra adipiscing.
                        </h6>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
