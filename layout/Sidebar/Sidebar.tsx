import Link from 'next/link';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ ...props }: SidebarProps) {
    return (
        <div className={styles.sidebar} {...props}>
            SIDEBAR
            <Link href='/search'>
                <h2>Search</h2>
            </Link>
            <Menu />
        </div>
    );
}
