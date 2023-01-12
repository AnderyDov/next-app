import { FunctionComponent } from 'react';
import AppContextProvider, { IContext } from '../context/app.context';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.content}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    );
}

export default function withLayout<
    T extends Record<string, unknown> & IContext,
>(Component: FunctionComponent<T>) {
    return function withLauoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider
                menu={props.menu}
                firstCategory={props.firstCategory}
            >
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
}
