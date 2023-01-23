import styles from './Cart.module.css';
import { HhDataProps } from './HhData.props';
import cn from 'classnames';

export function HhData({
    children,
    color = 'white',
    className,
    ...props
}: HhDataProps): JSX.Element {
    return (
        <div
            className={cn(className, {
                [styles.blue]: color === 'blue',
            })}
            {...props}
        >
            {children}
        </div>
    );
}
