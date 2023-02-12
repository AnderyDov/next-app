import axios from 'axios';
import { API } from '../helpers/api';
import { IMenu } from '../interfaces/menu.interface';
import withLauout from '../layout/Layout';
import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573495628366-64d875afdf1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573496528681-9b0f4fb0c660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573166855576-5e6dca380e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1623018035813-9cfb5b502e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1573219093925-cea25da23f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
            <div className={styles.image}>
                <img
                    src={
                        'https://images.unsplash.com/photo-1559085715-23704349e326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60'
                    }
                    alt={'image'}
                    sizes='33vw'
                    className={styles.wow}
                />
            </div>
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
