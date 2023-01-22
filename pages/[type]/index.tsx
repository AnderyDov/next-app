import Link from 'next/link';
import withLayout from '../../layout/Layout';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

function Type() {
    const router = useRouter();
    return (
        <div>
            <h2>
                {
                    firstLevelMenu.find(
                        (el) => el.route === router.asPath.split('/')[1],
                    )?.name
                }
            </h2>
            <Link href='/'>Home</Link>
        </div>
    );
}

export default withLayout(Type);
