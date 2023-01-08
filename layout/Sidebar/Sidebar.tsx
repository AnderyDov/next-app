import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ ...props }: SidebarProps) {
    return (
        <div className={styles.sidebar} {...props}>
            SIDEBAR
        </div>
    );
}
