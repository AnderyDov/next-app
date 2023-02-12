import axios from 'axios';
import Image from 'next/image';
import { API } from '../helpers/api';
import { IMenu } from '../interfaces/menu.interface';
import withLauout from '../layout/Layout';
import styles from '../styles/Home.module.css';
import i1 from '../image/1.jpg';
import i2 from '../image/2.jpg';
import i3 from '../image/3.jpg';
import i4 from '../image/4.jpg';
import i5 from '../image/5.jpg';
import i6 from '../image/6.jpg';
import i7 from '../image/7.jpg';
import i8 from '../image/8.jpg';

function Home() {
    return (
        <div className={styles.home}>
            {/* <div className={styles.image}>
                <Image
                    src={i1}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i2}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i3}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i4}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i5}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i6}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i7}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={i8}
                    alt={'image'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                    className={styles.wow}
                />
            </div> */}
        </div>
    );
}

export default withLauout(Home);

export const getStaticProps = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<IMenu[]>(API.topPage.find, {
        firstCategory,
    });

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};
