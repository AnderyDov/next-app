import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (s: SortEnum) => void;
}

export enum SortEnum {
    Rating,
    Price,
}
