import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppContextProvider from '../context/app.context';

export default function App({
    Component,
    pageProps,
    router,
}: AppProps): JSX.Element {
    return (
        <AppContextProvider
            menu={pageProps.menu}
            firstCategory={pageProps.firstCategory}
        >
            <Head>
                <title>Agregator Products</title>
                <meta
                    name='description'
                    content='Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
                <meta
                    property='og:url'
                    content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
                />
                <meta property='og:locale' content='ru_RU' />
                <meta property='og:type' content='article' />
            </Head>
            <Component {...pageProps} />
        </AppContextProvider>
    );
}
