import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { IMenu } from '../../interfaces/menu.interface';
import { IPageModel } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/propduct.interface';
import withLauout from '../../layout/Layout';

const firstCategory = 0;

function Cources({ menu, page, products }: CourcesProps) {
    return (
        <>
            <h1>{page.category}</h1>
            <Link href='/'>Home</Link>
            <hr />
            <hr />
            <ul>
                {products.map((p) => (
                    <li key={p.title}>{p.title}</li>
                ))}
            </ul>
        </>
    );
}

export default withLauout(Cources);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<IMenu[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        {
            firstCategory,
        },
    );
    const paths = menu
        .flatMap((m) => m.pages)
        .map((p) => '/cources/' + p.alias);
    console.log(paths);

    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CourcesProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<IMenu[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        {
            firstCategory,
        },
    );

    const { data: page } = await axios.get<IPageModel>(
        process.env.NEXT_PUBLIC_DOMAIN +
            '/api/top-page/byAlias/' +
            params.alias,
    );

    const { data: products } = await axios.post<IProductModel[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
        {
            category: page.category,
            limit: 10,
        },
    );

    return {
        props: {
            menu,
            firstCategory,
            page,
            products,
        },
    };
};

interface CourcesProps extends Record<string, unknown> {
    menu: IMenu[];
    firstCategory: number;
    page: IPageModel;
    products: IProductModel[];
}
