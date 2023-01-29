import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';

export function ButtonIcon({
    appearens,
    className,
    icon,
    ...props
}: ButtonIconProps): JSX.Element {
    const IconComp = icons[icon];

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearens === 'primary',
                [styles.white]: appearens === 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
}
