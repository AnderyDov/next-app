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

export function priceRu(price: number): string {
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .concat(' ₽');
}

export const declOfNum = (
    number: number,
    titles: [string, string, string],
): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};
