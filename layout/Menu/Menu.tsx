import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import Book from './icons/book.svg';
import Cource from './icons/cource.svg';
import Service from './icons/service.svg';
import Product from './icons/product.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { IFirstLevelMenu } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import Link from 'next/link';

const firstLevelMenu: IFirstLevelMenu[] = [
    {
        route: 'cources',
        name: 'Курсы',
        icons: <Cource />,
        id: TopLevelCategory.Courses,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icons: <Service />,
        id: TopLevelCategory.Services,
    },
    {
        route: 'books',
        name: 'Книги',
        icons: <Book />,
        id: TopLevelCategory.Books,
    },
    {
        route: 'products',
        name: 'Продукты',
        icons: <Product />,
        id: TopLevelCategory.Products,
    },
];

function firstLevel(): JSX.Element {
    return (
        <div>
            {firstLevelMenu.map((menu) => (
                <Link href={menu.route}>
                    <div key={menu.route} className={styles.firstLevel}>
                        {menu.icons}
                        <span>{menu.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default function Menu(): JSX.Element {
    const { menu } = useContext(AppContext);
    return <div>{firstLevel()}</div>;
}
