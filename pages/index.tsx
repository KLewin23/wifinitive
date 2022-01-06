import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
    const [hoveredTile, setHoveredTile] = useState<null | number>(null);

    return (
        <div className={styles.container}>
            <Head>
                <title>Wifinitive</title>
                <meta name={'description'} content={'Wifinitive website - homepage'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main>
                <Navbar mode={'dark'} />
                <div className={styles.quarterTiles}>
                    <div className={styles.tile} onMouseEnter={() => setHoveredTile(0)} onMouseLeave={() => setHoveredTile(null)}>
                        <h2>Decahedra</h2>
                        <p>Delivering Scalable and Secure Data Centre Solutions Across Europe, Asia and Africa.</p>
                        <a href={'/decahedra'}>Learn more</a>
                    </div>
                    <div className={styles.tile} onMouseEnter={() => setHoveredTile(1)} onMouseLeave={() => setHoveredTile(null)}>
                        <h2>Consultancy</h2>
                        <p>Utilise our world-class team for your next project and benefit from lower costs and full support.</p>
                        <a href={'/consultancy'}>Learn more</a>
                    </div>
                    <div className={styles.tile} onMouseEnter={() => setHoveredTile(2)} onMouseLeave={() => setHoveredTile(null)}>
                        <h2>IT Management</h2>
                        <p>On Premises or Remote IT Contracting for your platforms and services.</p>
                        <a href={'/it-management'}>Learn more</a>
                    </div>
                    <div className={styles.tile} onMouseEnter={() => setHoveredTile(3)} onMouseLeave={() => setHoveredTile(null)}>
                        <h2>Decahedra Cloud</h2>
                        <p>
                            The Cloud Hosting Platform for Developers. Revolutionary Infrastructure at Competitive Pricing to be your trusted cloud
                            partner for your future.
                        </p>
                        <a href={'/decahedra-cloud'}>Learn more</a>
                    </div>
                    <div className={styles.sliders}>
                        <div className={styles.slide1} style={{ transform: hoveredTile === 0 ? 'rotate(-32deg) scaleX(2.7)' : 'rotate(-32deg)' }} />
                        <div className={styles.slide2} style={{ transform: hoveredTile === 1 ? 'rotate(-32deg) scaleX(2.85)' : 'rotate(-32deg)' }} />
                        <div className={styles.slide3} style={{ transform: hoveredTile === 2 ? 'rotate(-32deg) scaleX(3.6)' : 'rotate(-32deg)' }} />
                        <div className={styles.slide4} style={{ transform: hoveredTile === 3 ? 'rotate(-32deg) scaleX(3.6)' : 'rotate(-32deg)' }} />
                    </div>
                </div>
                <div className={styles.stats}>stats</div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
