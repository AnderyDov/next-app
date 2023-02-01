import { Htag } from '../components';

export default function Error500(): JSX.Element {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Htag tag='h1'>Ошибка 500</Htag>
        </div>
    );
}
