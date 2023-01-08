export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

export interface IAdventage {
    _id: string;
    title: string;
    descripton: string;
}
export interface IHhData {
    _id: string;
    count: number;
    juniorsalary: number;
    middleSalary: number;
    seniorSalary: number;
    updateAt: Date;
}
export interface IPageModel {
    tags: string;
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagstitle: string;
    metaTitle: string;
    metaDescripion: string;
    firstCatgory: TopLevelCategory;
    advantages: IAdventage[];
    createAt: Date;
    updateAt: Date;
    hh: IHhData;
}
