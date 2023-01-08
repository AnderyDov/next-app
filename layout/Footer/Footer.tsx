import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import Link from 'next/link';
import { format } from 'date-fns';

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <span>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </span>
            <Link href={'#'} target='_blank'>
                Пользовательское соглашение
            </Link>
            <Link href={'#'}>Политика конфиденциальности</Link>
        </footer>
    );
}
