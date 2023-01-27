import { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rate.module.css';
import { RateProps } from './Rate.props';
import cn from 'classnames';
import Star from './star.svg';

export function Rate({
    isEditable = false,
    rate = 3,
    setRate,
}: RateProps): JSX.Element {
    const [localRate, setLocalRate] = useState<number>(0);

    function handlerEnter(i: number) {
        if (isEditable) {
            setLocalRate(i + 1);
        }
    }
    function handlerChange() {
        if (setRate && isEditable) {
            setRate(localRate);
        }
    }
    function handlerLeave() {
        if (isEditable) {
            setLocalRate(rate);
        }
    }
    function handlerChangeKeyboard(e: KeyboardEvent<SVGAElement>, i: number) {
        if (setRate && isEditable && e.code === 'Space') {
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
                            [styles.isEditable]: isEditable,
                            [styles.primary]: i < localRate,
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
        </div>
    );
}
