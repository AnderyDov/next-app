import { IProductModel } from '../../interfaces/propduct.interface';
import { SortEnum } from './Sort.props';

export type SortAtion = { type: SortEnum.Rating } | { type: SortEnum.Price };

export interface SortReducerState {
    sort: SortEnum;
    products: IProductModel[];
}

export function sortReducer(
    state: SortReducerState,
    action: SortAtion,
): SortReducerState {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) =>
                    a.initialRating > b.initialRating ? -1 : 1,
                ),
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) =>
                    a.price > b.price ? 1 : -1,
                ),
            };
        default:
            throw new Error('неверный тип сортировки');
    }
}