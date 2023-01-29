import styles from './Up.module.css';
import useScrollY from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

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
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearens='primary' icon='up' onClick={scrollTo} />
        </motion.div>
    );
}
