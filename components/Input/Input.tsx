import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
    (
        { className, error, ...props }: InputProps,
        ref: ForwardedRef<HTMLInputElement>,
    ): JSX.Element => {
        return (
            <div className={styles.inputWrapper}>
                <input
                    ref={ref}
                    className={cn(className, styles.input, {
                        [styles.error]: error,
                    })}
                    {...props}
                />
                {error && (
                    <span role='alert' className={styles.errorMessage}>
                        {error.message}
                    </span>
                )}
            </div>
        );
    },
);
