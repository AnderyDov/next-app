import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Cart } from '../Cart/Cart';
import { Rate } from '../Rate/Rate';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import cn from 'classnames';
import { forwardRef, ForwardedRef, useRef, useState } from 'react';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Product = motion(
    forwardRef(
        (
            { product }: ProductProps,
            ref: ForwardedRef<HTMLDivElement>,
        ): JSX.Element => {
            const [isReviewOpened, setIsReviewOpened] =
                useState<boolean>(false);
            const reviewRef = useRef<HTMLDivElement>(null);

            function scrollToReview() {
                setIsReviewOpened(true);
                reviewRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            return (
                <div ref={ref}>
                    <Cart className={styles.product}>
                        <div className={styles.logo}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_DOMAIN +
                                    product.image
                                }
                                alt={product.title}
                                width={70}
                                height={70}
                            />
                        </div>

                        <div className={styles.title}>{product.title}</div>
                        <div className={styles.price}>
                            {priceRu(product.price)}
                            {product.oldPrice && (
                                <Tag className={styles.oldPrice} color='green'>
                                    {priceRu(product.price - product.oldPrice)}
                                </Tag>
                            )}
                        </div>
                        <div className={styles.credit}>
                            {priceRu(product.credit)}/
                            <span className={styles.month}>мес</span>
                        </div>
                        <div className={styles.rate}>
                            <Rate
                                rating={
                                    product.reviewAvg ?? product.initialRating
                                }
                            />
                        </div>
                        <div className={styles.tags}>
                            {product.tags.map((el) => (
                                <Tag
                                    key={el}
                                    color='ghost'
                                    className={styles.category}
                                >
                                    {el}
                                </Tag>
                            ))}
                        </div>
                        <div className={styles.priceTitle}>цена</div>
                        <div className={styles.creditTitle}>кредит</div>
                        <div className={styles.reviewCount}>
                            <Link
                                href='#ref'
                                className={styles.rateTitle}
                                onClick={scrollToReview}
                            >
                                {product.reviewCount}
                                {declOfNum(product.reviewCount, [
                                    'отзыв',
                                    'отзыва',
                                    'отзывов',
                                ])}
                            </Link>
                        </div>
                        <div className={styles.hr}>
                            <Divider className={styles.hr} />
                        </div>
                        <div className={styles.description}>
                            {product.description}
                        </div>
                        <div className={styles.feature}>
                            {product.characteristics.map((c) => (
                                <div
                                    className={styles.characteristics}
                                    key={c.name}
                                >
                                    <span
                                        className={styles.characteristicsName}
                                    >
                                        {c.name}
                                    </span>
                                    <span
                                        className={styles.characteristicsDots}
                                    ></span>
                                    <span
                                        className={styles.characteristicsValue}
                                    >
                                        {c.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.advBlock}>
                            {product.advantages && (
                                <div className={styles.advantages}>
                                    <div className={styles.advTitle}>
                                        Преимущества
                                    </div>
                                    <div>{product.advantages}</div>
                                </div>
                            )}
                            {product.disadvantages && (
                                <div className={styles.disadvantages}>
                                    <div className={styles.advTitle}>
                                        Недостатки
                                    </div>
                                    <div>{product.disadvantages}</div>
                                </div>
                            )}
                        </div>
                        <Divider className={cn(styles.hr, styles.hr2)} />
                        <div className={styles.actions}>
                            <Button
                                appearens='primary'
                                className={styles.reviewButton}
                            >
                                Узнать подробнее
                            </Button>
                            <Button
                                appearens='ghost'
                                arrow={isReviewOpened ? 'down' : 'right'}
                                onClick={() =>
                                    setIsReviewOpened(!isReviewOpened)
                                }
                            >
                                Читать отзывы
                            </Button>
                        </div>
                    </Cart>
                    <Cart
                        color='blue'
                        className={cn(styles.review, {
                            [styles.opend]: isReviewOpened,
                            [styles.closed]: !isReviewOpened,
                        })}
                        ref={reviewRef}
                    >
                        <ReviewForm productId={product._id} />
                        <Divider />
                        {product.reviews.map((el) => {
                            return (
                                <div key={el._id}>
                                    <Review review={el} />
                                    <Divider />
                                </div>
                            );
                        })}
                    </Cart>
                </div>
            );
        },
    ),
);
