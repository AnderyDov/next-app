import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo.svg';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header({ className, ...props }: HeaderProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                ftiffness: 20,
            },
        },
        close: {
            opacity: 0,
            x: '100%',
        },
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon
                appearens='white'
                icon='menu'
                onClick={() => setIsOpened(true)}
            />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial='close'
                animate={isOpened ? 'opened' : 'close'}
            >
                <Sidebar />
                <ButtonIcon
                    className={styles.menuClose}
                    appearens='white'
                    icon='close'
                    onClick={() => setIsOpened(false)}
                />
            </motion.div>
        </header>
    );
}
