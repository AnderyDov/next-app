import styles from './Cart.module.css';
import { CartProps } from './Cart.props';
import cn from 'classnames';

export function Cart({
    children,
    color = 'white',
    className,
    ...props
}: CartProps): JSX.Element {
    return (
        <div
            className={cn(styles.cart, className, {
                [styles.blue]: color === 'blue',
            })}
            {...props}
        >
            {children}
        </div>
    );
}
