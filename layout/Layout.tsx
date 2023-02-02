import { FunctionComponent, useRef, useState, KeyboardEvent } from 'react';
import { Up } from '../components';
import { IContext } from '../context/app.context';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';
import cn from 'classnames';

function Layout({ children }: LayoutProps): JSX.Element {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
        useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    function skipContentAction(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            bodyRef.current?.focus();
            setIsSkipLinkDisplayed(false);
        }
    }

    return (
        <div className={styles.layout}>
            <div
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={0}
                className={cn(styles.skipLink, {
                    [styles.displayed]: isSkipLinkDisplayed,
                })}
                onKeyDown={(e: KeyboardEvent) => skipContentAction(e)}
                onBlur={() => setIsSkipLinkDisplayed(false)}
            >
                перейти к контенту
            </div>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.content} ref={bodyRef} tabIndex={0}>
                {children}
            </div>
            <Footer className={styles.footer} />
            <Up />
        </div>
    );
}

export default function withLayout<
    T extends Record<string, unknown> & IContext,
>(Component: FunctionComponent<T>) {
    return function withLauoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
}
