import { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rate.module.css';
import { RateProps } from './Rate.props';
import cn from 'classnames';
import Star from './star.svg';
import { ForwardedRef, forwardRef } from 'react';

export const Rate = forwardRef(
    (
        { isEditable = false, rating = 0, setRating, error }: RateProps,
        ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
        const [localRate, setLocalRate] = useState<number>(0);

        function handlerEnter(i: number) {
            if (isEditable) {
                setLocalRate(i + 1);
            }
        }
        function handlerChange() {
            if (setRating && isEditable) {
                setRating(localRate);
            }
        }
        function handlerLeave() {
            if (isEditable) {
                setLocalRate(rating);
            }
        }
        function handlerChangeKeyboard(
            e: KeyboardEvent<SVGAElement>,
            i: number,
        ) {
            if (setRating && isEditable && e.code === 'Space') {
                setRating(i + 1);
            }
        }

        useEffect(() => {
            setLocalRate(rating);
        }, [rating]);

        return (
            <div ref={ref} className={styles.rating}>
                {[1, 2, 3, 4, 5].map((el, i) => {
                    return (
                        <span
                            className={cn(styles.star, {
                                [styles.isEditable]: isEditable,
                                [styles.primary]: i < localRate,
                                [styles.error]: error,
                            })}
                            key={el}
                            onMouseEnter={() => handlerEnter(i)}
                            onClick={handlerChange}
                            onMouseLeave={handlerLeave}
                        >
                            <Star
                                tabIndex={isEditable ? 0 : -1}
                                onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                                    handlerChangeKeyboard(e, i)
                                }
                            />
                        </span>
                    );
                })}
                {error && (
                    <span className={styles.errorMessage}>{error.message}</span>
                )}
            </div>
        );
    },
);
