import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export default function Menu(): JSX.Element {
    const { menu } = useContext(AppContext);
    return (
        <ul>
            {menu.map((m) => (
                <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
            ))}
        </ul>
    );
}
