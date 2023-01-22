import Link from 'next/link';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import cn from 'classnames';

export default function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <div className={cn(className, styles.sidebar, {})} {...props}>
            <Logo className={styles.logo} />
            <Link href='/search'>
                <h2>Search</h2>
            </Link>
            <Menu />
        </div>
    );
}
