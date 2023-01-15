import { IFirstLevelMenu } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import Cources from './icons/cource.svg';
import Books from './icons/book.svg';
import Products from './icons/product.svg';
import Services from './icons/service.svg';

export const firstLevelMenu: IFirstLevelMenu[] = [
    {
        route: 'cources',
        name: 'Курсы',
        icons: <Cources />,
        id: TopLevelCategory.Courses,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icons: <Services />,
        id: TopLevelCategory.Services,
    },
    {
        route: 'books',
        name: 'Книги',
        icons: <Books />,
        id: TopLevelCategory.Books,
    },
    {
        route: 'products',
        name: 'Продукты',
        icons: <Products />,
        id: TopLevelCategory.Products,
    },
];
