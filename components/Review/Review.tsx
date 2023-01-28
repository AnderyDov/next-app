import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import cn from 'classnames';
import User from './user.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rate } from '../Rate/Rate';

export function Review({
    review,
    className,
    ...props
}: ReviewProps): JSX.Element {
    const { name, title, description, createdAt, rating } = review;

    return (
        <div className={cn(styles.review, className)} {...props}>
            <User className={styles.user} />
            <div className=''>
                <span className={styles.name}>{name} : </span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
            </div>
            <div className={styles.rating}>
                <Rate rating={rating} />
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}
