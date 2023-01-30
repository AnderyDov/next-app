import { Htag } from '../components';
import withLauout from '../layout/Layout';

export function Error404(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Ошибка 404</Htag>
        </>
    );
}

export default withLauout(Error404);
