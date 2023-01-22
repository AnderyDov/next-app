import { TopLevelCategory, IPageModel } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/propduct.interface';

export interface TopPageComponent extends Record<string, unknown> {
    firstCategory: TopLevelCategory;
    page: IPageModel;
    products: IProductModel[];
}
