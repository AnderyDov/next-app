import { Htag } from '../components';
import withLauout from '../layout/Layout';

function Error500(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Ошибка 500</Htag>
        </>
    );
}

export default withLauout(Error500);
