import { firstLevelMenu } from '../../helpers/helpers';
import { IFirstLevelMenu } from '../../interfaces/menu.interface';
import Link from 'next/link';
import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, KeyboardEvent } from 'react';
import { AppContext } from '../../context/app.context';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Menu(): JSX.Element {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.04,
            },
        },
        hidden: { marginBottom: 0 },
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                ease: 'easeOut',
                duration: 0.1,
            },
        },
        hidden: { opacity: 0, height: 0 },
    };

    function openThridLevel(second: string) {
        setMenu &&
            setMenu(
                menu.map((m) => {
                    if (m._id.secondCategory === second) {
                        m.isOpened = !m.isOpened;
                    }
                    return m;
                }),
            );
    }

    function openThridLevelKey(e, second: string) {
        if (e.code === 'Enter' || e.code === 'Space') {
            e.preventDefault();
            openThridLevel(second);
        }
    }

    function buildFirstLevel(): JSX.Element {
        return (
            <div>
                {firstLevelMenu.map((firstLevelItem: IFirstLevelMenu) => {
                    return (
                        <div key={firstLevelItem.route}>
                            <Link
                                href={'/' + firstLevelItem.route}
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]:
                                        firstLevelItem.id === firstCategory,
                                })}
                            >
                                {firstLevelItem.icons}
                                <span>{firstLevelItem.name}</span>
                            </Link>
                            {firstLevelItem.id === firstCategory &&
                                buildSecondLevel(firstLevelItem)}
                        </div>
                    );
                })}
            </div>
        );
    }

    function buildSecondLevel(firstLevelItem: IFirstLevelMenu): JSX.Element {
        return (
            <div className={styles.secondLevelBlock}>
                {menu.map((secondLevelItem) => {
                    if (
                        secondLevelItem.pages
                            .map((p) => p.alias)
                            .includes(router.asPath.split('/')[2])
                    ) {
                        secondLevelItem.isOpened = true;
                    }
                    return (
                        <div key={secondLevelItem._id.secondCategory}>
                            <div
                                tabIndex={0}
                                onKeyDown={(e: KeyboardEvent) =>
                                    openThridLevelKey(
                                        e,
                                        secondLevelItem._id.secondCategory,
                                    )
                                }
                                className={styles.secondLevel}
                                onClick={() =>
                                    openThridLevel(
                                        secondLevelItem._id.secondCategory,
                                    )
                                }
                            >
                                {secondLevelItem._id.secondCategory}
                            </div>
                            {buildThridLevel(
                                secondLevelItem.pages,
                                firstLevelItem.route,
                                secondLevelItem.isOpened,
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    function buildThridLevel(
        pages,
        route: string,
        opened: boolean | undefined,
    ): JSX.Element {
        return (
            <motion.div
                initial={opened ? 'visible' : 'hidden'}
                animate={opened ? 'visible' : 'hidden'}
                variants={variants}
                className={cn(styles.thridLevelBlock)}
            >
                {pages.map((thridLevelItem) => {
                    return (
                        <motion.div
                            key={thridLevelItem._id}
                            variants={variantsChildren}
                        >
                            <Link
                                tabIndex={opened ? 0 : -1}
                                href={`/${route}/${thridLevelItem.alias}`}
                                className={cn(styles.thirdLevel, {
                                    [styles.thirdLevelActive]:
                                        router.asPath.split('/')[2] ===
                                        thridLevelItem.alias,
                                })}
                            >
                                {thridLevelItem.category}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        );
    }

    return <>{buildFirstLevel()}</>;
}
