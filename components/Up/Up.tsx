import styles from './Up.module.css';
import UpIcon from './up.svg';
import useScrollY from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function Up() {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    function scrollTo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <motion.button
            className={styles.up}
            onClick={scrollTo}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <UpIcon />
        </motion.button>
    );
}
