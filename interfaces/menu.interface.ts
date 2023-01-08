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
