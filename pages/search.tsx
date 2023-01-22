import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import withLayout from '../layout/Layout';

function Search() {
    const { menu } = useContext(AppContext);
    console.log(menu);

    return (
        <div>
            <h2>Search</h2>
        </div>
    );
}

export default withLayout(Search);
