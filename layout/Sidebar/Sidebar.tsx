import Link from 'next/link';
import Menu from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import cn from 'classnames';
import { Search } from '../../components';

export default function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <div className={cn(className, styles.sidebar, {})} {...props}>
            <Link href='/' aria-label='переход на главную страницу'>
                <Logo className={styles.logo} />
            </Link>
            <Search />
            <Menu />
        </div>
    );
}
