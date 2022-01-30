import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useWindowWidth from '../components/useWindowWidth';
import DecahedraCloud from '../public/DecahedraCloud.svg';
import ImplementingSaas from '../public/ImplementingSaas.svg';
import PinkBars from '../public/pinkBars.svg';

const Home: NextPage = () => {
    const [hoveredTile, setHoveredTile] = useState<null | number>(null);
    const quarterTiles = useRef<HTMLDivElement | null>(null);
    const windowWidth = useWindowWidth();

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
                            <h2
                                style={{
                                    background: windowWidth < 850 ? '-webkit-linear-gradient(90deg, #2DE07F -12.69%, #39D3E8 123.38%)' : 'none',
                                }}
                            >
                                Decahedra
                            </h2>
                            <p>Delivering Scalable and Secure Data Centre Solutions Across Europe, Asia and Africa.</p>
                            <a href={'/decahedra'}>Learn more</a>
                        </div>
                        <div
                            className={styles.slide1}
                            style={windowWidth >= 850 ? { transform: hoveredTile === 0 ? `rotate(-36deg) scaleX(2.9)` : `rotate(-36deg)` } : {}}
                        />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(1)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2
                                style={{
                                    background: windowWidth < 850 ? '-webkit-linear-gradient(269.39deg, #FF62D3 -5.52%, #FFAD4D 115.58%)' : 'none',
                                }}
                            >
                                IT Management
                            </h2>
                            <p>On Premises or Remote IT Contracting for your platforms and services.</p>

                            <a href={'/consultancy'}>Learn more</a>
                        </div>
                        <div
                            className={styles.slide2}
                            style={windowWidth >= 850 ? { transform: hoveredTile === 1 ? `rotate(-36deg) scaleX(2.9)` : `rotate(-36deg)` } : {}}
                        />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(2)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2
                                style={{
                                    background: windowWidth < 850 ? '-webkit-linear-gradient(269.81deg, #3649FC -14.41%, #B235FF 100.56%)' : 'none',
                                }}
                            >
                                Consultancy
                            </h2>
                            <p>Utilise our world-class team for your next project and benefit from lower costs and full support.</p>
                            <a href={'/it-management'}>Learn more</a>
                        </div>
                        <div
                            className={styles.slide3}
                            style={windowWidth >= 850 ? { transform: hoveredTile === 2 ? 'rotate(-36deg) scaleX(3.3)' : 'rotate(-36deg)' } : {}}
                        />
                    </div>
                    <div className={styles.tile}>
                        <div onMouseEnter={() => setHoveredTile(3)} onMouseLeave={() => setHoveredTile(null)}>
                            <h2
                                style={{
                                    background: windowWidth < 850 ? '-webkit-linear-gradient(270.12deg, #0FD4FF -9.68%, #2069D7 100.62%)' : 'none',
                                }}
                            >
                                Decahedra Cloud
                            </h2>
                            <p>
                                The Cloud Hosting Platform for Developers. Revolutionary Infrastructure at Competitive Pricing to be your trusted
                                cloud partner for your future.
                            </p>
                            <a href={'/decahedra-cloud'}>Learn more</a>
                        </div>
                        <div
                            className={styles.slide4}
                            style={windowWidth >= 850 ? { transform: hoveredTile === 3 ? 'rotate(-36deg) scaleX(3.3)' : 'rotate(-36deg)' } : {}}
                        />
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
                <div>
                    <div className={styles.splitCard}>
                        <div className={styles.implementingSaas}>
                            <div>
                                <h4>Implementing SaaS</h4>
                                <h6>Our experts will show your how to utilize SaaS by applying the right practises in a cloud-first initiative.</h6>
                                <a href={'/decahedra'}>Learn more</a>
                            </div>
                            {windowWidth > 350 ? <Image src={ImplementingSaas} /> : null}
                        </div>
                        <div className={styles.decahedraCloud}>
                            <div>
                                <h4>Decahedra Cloud</h4>
                                <h6>Use our revolutionary cloud platform to accelerate your business goals into reality.</h6>
                                <a href={'/decahedra'}>Learn more</a>
                            </div>
                            {windowWidth > 350 ? <Image src={DecahedraCloud} /> : null}
                        </div>
                    </div>
                    <div className={styles.infoBlocks}>
                        <div>
                            <h3>Wifinitive Network Operations</h3>
                            <h6>
                                Learn how Wifinitive manages Data Centre and Cloud Networks worldwide ensuring stability, responsiveness and strong
                                performance.
                            </h6>
                        </div>
                        <div>
                            <h3>Your NOC, visualised.</h3>
                            <h6>
                                Wifinitive NOC Visualisation provides real-time insights into the Wifinitive and Decahedra networks deployed
                                worldwide. Wifinitive NOC offers detailed insights into destination and origin, protocol details and strong logging
                                ability.
                            </h6>
                            <a href={'/idk'}>See our public network visualisation map here</a>
                        </div>
                    </div>
                </div>
                <div className={styles.section5}>
                    <div>
                        <h3>Technology Solutions</h3>
                        <h6>
                            We help companies reduce cost and maximise support for business acceleration by modernising IT infrastructure and
                            applications. Our services cover all areas of your business.
                        </h6>
                        <a href={'/idk'}>Learn more</a>
                    </div>
                    <div>
                        <h3>Application Development</h3>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed odio viverra adipiscing.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Faucibus sed odio viverra adipiscing.
                        </h6>
                        <a href={'/idk'}>Learn more</a>
                    </div>
                </div>
                <div style={{ position: 'relative', overflowX: 'hidden' }}>
                    <Image src={PinkBars} layout={'responsive'} />
                    <div className={styles.products}>
                        <h3>Products</h3>
                        <div>
                            <div>
                                <h2>Lorem</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                <a href={'/idk'}>Learn more</a>
                            </div>
                            <div>
                                <h2>Ipsum</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                <a href={'/idk'}>Learn more</a>
                            </div>
                            <div>
                                <h2>Dolor</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                <a href={'/idk'}>Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
