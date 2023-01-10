import Link from 'next/link';
import { Htag } from '../../components';
import withLauout from '../../layout/Layout';

function Cources(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>COURCES</Htag> <Link href='/'>Home</Link>
        </>
    );
}

export default withLauout(Cources);
