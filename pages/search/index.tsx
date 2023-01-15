import Link from 'next/link';
import withLayout from '../../layout/Layout';

function Search() {
    return (
        <div>
            <h2>Search</h2>
            <Link href='/'>Home</Link>
        </div>
    );
}

export default withLayout(Search);
