import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export default function Header({ ...props }: HeaderProps) {
    return (
        <div className={styles.header} {...props}>
            HEADER
        </div>
    );
}
