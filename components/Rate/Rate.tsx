import { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rate.module.css';
import { RateProps } from './Rate.props';
import cn from 'classnames';
import Star from './star.svg';

export function Rate({
    isEditadle = false,
    rate = 3,
    setRate,
}: RateProps): JSX.Element {
    const [localRate, setLocalRate] = useState<number>(0);

    function handlerEnter(i: number) {
        if (isEditadle) {
            setLocalRate(i + 1);
        }
    }
    function handlerChange() {
        if (setRate && isEditadle) {
            setRate(localRate);
        }
    }
    function handlerLeave() {
        if (isEditadle) {
            setLocalRate(rate);
        }
    }
    function handlerChangeKeyboard(e: KeyboardEvent<SVGAElement>, i: number) {
        if (setRate && isEditadle && e.code === 'Space') {
            setRate(i + 1);
        }
    }

    useEffect(() => {
        setLocalRate(rate);
    }, [rate]);

    return (
        <div className={styles.rate}>
            {[1, 2, 3, 4, 5].map((el, i) => {
                return (
                    <span
                        className={cn(styles.star, {
                            [styles.isEditadle]: isEditadle,
                            [styles.primary]: i < localRate,
                        })}
                        key={el}
                        onMouseEnter={() => handlerEnter(i)}
                        onClick={handlerChange}
                        onMouseLeave={handlerLeave}
                    >
                        <Star
                            tabIndex={isEditadle ? 0 : -1}
                            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                                handlerChangeKeyboard(e, i)
                            }
                        />
                    </span>
                );
            })}
        </div>
    );
}
