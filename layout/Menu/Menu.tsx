import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export default function Menu(): JSX.Element {
    const { menu } = useContext(AppContext);

    return (
        <ul>
            {menu.map((el) => {
                return (
                    <li key={el._id.secondCategory}>
                        <Link href='/cources'>{el._id.secondCategory}</Link>{' '}
                    </li>
                );
            })}
        </ul>
    );
}
