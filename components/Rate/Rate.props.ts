import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RateProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditadle?: boolean;
    rate?: number;
    setRate?: (number) => void;
}
