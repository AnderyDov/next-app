import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Cart } from '../Cart/Cart';
import { Rate } from '../Rate/Rate';
import { Tag } from '../Tag/Tag';

export const Product = ({
    product,
    className,
    ...props
}: ProductProps): JSX.Element => {
    return (
        <Cart className={styles.product}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN} alt={product.title} />
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
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.title}>{product.title}</div>
        </Cart>
    );
};
