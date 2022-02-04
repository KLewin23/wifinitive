import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Chess, CloudServices, Upload, Document, CloudEcosystem } from '../../public';
import { Navbar, Footer } from '../../components';
import styles from '../../styles/services/cloud.module.css';

const Cloud = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Wifinitive cloud</title>
                <meta name={'description'} content={'Wifinitive website - cloud services'} />
                <link rel={'icon'} href={'/favicon.png'} />
            </Head>
            <main className={styles.main}>
                <Navbar mode={'light'} />
                <div className={styles.header}>
                    <Image src={CloudServices} layout={'responsive'} width={1440} />
                    <div>
                        <h1>
                            Cloud <br />
                            Services
                        </h1>
                        <h6>Move towards a cloud-first platform and stay ahead in the competitive digital age.</h6>
                    </div>
                </div>
                <section className={styles.statements}>
                    <div className={styles.topPart}>
                        <h3>
                            <span>World-class</span> innovative solutions
                        </h3>
                        <h6>
                            Wifinitive Cloud Services offer solutions for enterprises looking to streamline their cloud offerings and modernize their
                            applications. Make the cloud work for you and create new business opportunities to generate profit and growth.
                        </h6>
                    </div>
                    <div className={styles.lowerPart}>
                        <div>
                            <Image src={Chess} layout={'fixed'} />
                            <div>
                                <h5>Cloud Strategy</h5>
                                <h6>Design sustainable advantages in the fast-paced digital world with the right focus.</h6>
                                <Link href={'/services/cloud-strategy'}>Learn More</Link>
                            </div>
                        </div>
                        <div>
                            <Image src={Upload} layout={'fixed'} />
                            <div>
                                <h5>Software as a Service</h5>
                                <h6>Fast track your cloud passage through appropriate deployments of SaaS practices.</h6>
                            </div>
                        </div>
                        <div>
                            <Image src={Document} layout={'fixed'} />
                            <div>
                                <h5>Workload Migration</h5>
                                <h6>Turn your ambitions into reality with an efficient approach to your business’ challenge.</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.cloudEcosystem}>
                    <Image src={CloudEcosystem} layout={'fill'} objectPosition={'right'} objectFit={'contain'} />
                    <div className={styles.text}>
                        <h3>Our Cloud Ecosystem</h3>
                        <h6>
                            It takes a collaborative effort to keep your company running at the top of its game, and for your IT experience it’s no
                            different.
                        </h6>
                        <h6>
                            We have collaborated with some high level companies such as Juniper Networks,Infradata, Cloudflare, SuperMicro and NetApp
                            to ensure you have the best in everything from hardware to data centre environments over the world.
                        </h6>
                    </div>
                    <div className={styles.brands} />
                </section>
                <Footer />
            </main>
        </>
    );
};

export default Cloud;
