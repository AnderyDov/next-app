import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export function Input({ className, ...props }: InputProps): JSX.Element {
    return <input className={cn(className, styles.input)} {...props} />;
}
