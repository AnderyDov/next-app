import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import Arrow from './arrow.svg';
import cn from 'classnames';

export function Button({
    children,
    appearens,
    arrow = 'none',
    className,
    ...props
}: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearens === 'primary',
                [styles.ghost]: appearens === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.right]: arrow === 'right',
                        [styles.down]: arrow === 'down',
                    })}
                >
                    <Arrow />
                </span>
            )}
        </button>
    );
}
