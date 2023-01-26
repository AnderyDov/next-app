export interface IProduct {
    value: string;
    name: string;
}

export interface IReview {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface IProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: IProduct[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: IReview[];
    reviewCount: number;
    reviewAvg?: number;
    advantages: string;
    disadvantages: string;
}
