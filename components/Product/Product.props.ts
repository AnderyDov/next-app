import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../interfaces/propduct.interface';

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProductModel;
}
