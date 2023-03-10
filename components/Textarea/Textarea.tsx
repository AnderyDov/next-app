import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(
    (
        { className, error, ...props }: TextareaProps,
        ref: ForwardedRef<HTMLTextAreaElement>,
    ): JSX.Element => {
        return (
            <div className={styles.textareaWrapper}>
                <textarea
                    ref={ref}
                    className={cn(className, styles.textarea, {
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
