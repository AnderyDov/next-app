import Link from 'next/link';
import { TopPageComponent } from './TopPageComponent.props';

export function TopPageComponent({
    firstCategory,
    page,
    products,
}: TopPageComponent): JSX.Element {
    return (
        <>
            <h1>{page && page.category}</h1>
            <Link href='/'>Home</Link>
            <ul>
                {products &&
                    products.map((p) => <li key={p.title}>{p.title}</li>)}
            </ul>
        </>
    );
}
