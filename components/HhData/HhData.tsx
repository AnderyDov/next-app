import styles from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import { Cart } from '../Cart/Cart';
import Rate from './rate.svg';

export function HhData({
    count,
    juniorSalary,
    middleSalary,
    seniorSalary,
}: HhDataProps): JSX.Element {
    return (
        <div className={styles.hh}>
            <Cart className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Cart>
            <Cart className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.countValue}>{juniorSalary}</div>
                    <div className={styles.rate}>
                        <Rate className={styles.filled} />
                        <Rate />
                        <Rate />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.countValue}>{middleSalary}</div>
                    <div className={styles.rate}>
                        <Rate className={styles.filled} />
                        <Rate className={styles.filled} />
                        <Rate />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессиональный</div>
                    <div className={styles.countValue}>{seniorSalary}</div>
                    <div className={styles.rate}>
                        <Rate className={styles.filled} />
                        <Rate className={styles.filled} />
                        <Rate className={styles.filled} />
                    </div>
                </div>
            </Cart>
        </div>
    );
}
