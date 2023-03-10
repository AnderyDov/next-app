import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import cn from 'classnames';
import SortIcon from './sort.svg';

export function Sort({
    sort,
    setSort,
    className,
    ...props
}: SortProps): JSX.Element {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <button
                aria-labelledby='sort rating'
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating,
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По рейтингу
            </button>
            <button
                aria-labelledby='sort price'
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price,
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По&nbsp;цене
            </button>
        </div>
    );
}
