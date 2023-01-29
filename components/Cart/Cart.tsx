import styles from './Cart.module.css';
import { CartProps } from './Cart.props';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

export const Cart = forwardRef(
    (
        { children, color = 'white', className, ...props }: CartProps,
        ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
        return (
            <div
                className={cn(styles.cart, className, {
                    [styles.blue]: color === 'blue',
                })}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);
