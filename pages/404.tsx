import { Htag } from '../components';

export default function Error404(): JSX.Element {
    return (
        <div
            style={{
                height: '100vh',
                color: 'red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Htag tag='h1'>Ошибка 404</Htag>
        </div>
    );
}
