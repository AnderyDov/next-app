import { TopLevelCategory } from './page.interface';

export interface IPage {
    alias: string;
    title: string;
    _id: string;
    category: string;
}
export interface IMenu {
    _id: {
        secondCategory: string;
    };
    pages: IPage;
}
export interface IFirstLevelMenu {
    route: string;
    name: string;
    icons: JSX.Element;
    id: TopLevelCategory;
}
