import styles from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import cn from 'classnames';
import { Cart } from '../Cart/Cart';

export function HhData({ count }: HhDataProps): JSX.Element {
    return (
        <div className={styles.hh}>
            <Cart className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Cart>
        </div>
    );
}
