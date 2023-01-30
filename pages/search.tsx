import Head from 'next/head';
import withLayout from '../layout/Layout';

function Search() {
    return (
        <>
            <Head>
                <title>Результаты поиска</title>
            </Head>
            <div>
                <h2>Search</h2>
            </div>
        </>
    );
}

export default withLayout(Search);
