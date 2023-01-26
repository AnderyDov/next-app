import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Cart } from '../Cart/Cart';
import { Rate } from '../Rate/Rate';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

export const Product = ({ product }: ProductProps): JSX.Element => {
    return (
        <Cart className={styles.product}>
            <div className={styles.logo}>
                <img
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                    alt={product.title}
                />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rate}>
                <Rate rate={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.tags.map((el) => (
                    <Tag key={el} color='ghost'>
                        {el}
                    </Tag>
                ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.reviewCount}>
                {product.reviewCount} отзывов
            </div>
            <div className={styles.hr}>
                <hr />
            </div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>фичи</div>
            <div className={styles.advBlock}>
                <div>
                    <div>Преимущества</div>
                    {product.advantages}
                </div>
                <div>
                    <div>Недостатки</div>
                    {product.disadvantages}
                </div>
            </div>
            <div className={styles.hr}>
                <hr />
            </div>
            <div className={styles.actions}>
                <Button appearens='primary'>Узнать подробности</Button>
                <Button appearens='ghost' arrow='right'>
                    Показать отзывы
                </Button>
            </div>
        </Cart>
    );
};
