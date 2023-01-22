import { firstLevelMenu } from '../../helpers/helpers';
import { IFirstLevelMenu } from '../../interfaces/menu.interface';
import Link from 'next/link';
import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { useRouter } from 'next/router';

export default function Menu(): JSX.Element {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

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
            <div
                className={cn(styles.thridLevelBlock, {
                    [styles.thridLevelBlockOpen]: opened,
                })}
            >
                {pages.map((thridLevelItem) => {
                    return (
                        <Link
                            href={`/${route}/${thridLevelItem.alias}`}
                            key={thridLevelItem._id}
                            className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]:
                                    router.asPath.split('/')[2] ===
                                    thridLevelItem.alias,
                            })}
                        >
                            {thridLevelItem.category}
                        </Link>
                    );
                })}
            </div>
        );
    }

    return <>{buildFirstLevel()}</>;
}
