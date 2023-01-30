import withLayout from '../../layout/Layout';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import Head from 'next/head';
import { Error404 } from '../404';

function Type() {
    const router = useRouter();

    if (
        !firstLevelMenu.find((el) => el.route === router.asPath.split('/')[1])
            ?.name
    ) {
        return <Error404 />;
    }

    return (
        <>
            <Head>
                <title>
                    {
                        firstLevelMenu.find(
                            (el) => el.route === router.asPath.split('/')[1],
                        )?.name
                    }
                </title>
            </Head>
            <h2>
                {
                    firstLevelMenu.find(
                        (el) => el.route === router.asPath.split('/')[1],
                    )?.name
                }
            </h2>
        </>
    );
}

export default withLayout(Type);
