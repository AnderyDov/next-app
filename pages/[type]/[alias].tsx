import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';
import { IMenu } from '../../interfaces/menu.interface';
import { IPageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/propduct.interface';
import withLayout from '../../layout/Layout';
import { TopPageComponent } from '../../page-components';

function Cources({ page, products, firstCategory }: CourcesProps) {
    return (
        <TopPageComponent
            page={page}
            products={products}
            firstCategory={firstCategory}
        />
    );
}

export default withLayout(Cources);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const s of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenu[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
            { firstCategory: s.id },
        );
        paths = paths.concat(
            menu.flatMap((m) => m.pages).map((p) => `/${s.route}/${p.alias}`),
        );
    }

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
    const firstCategoryItem = firstLevelMenu.find(
        (el) => el.route === params.type,
    );
    if (!firstCategoryItem) {
        return {
            notFound: true,
        };
    }

    try {
        const { data: menu } = await axios.post<IMenu[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
            { firstCategory: firstCategoryItem.id },
        );
        if (menu.length === 0) {
            return { notFound: true };
        }

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
                firstCategory: firstCategoryItem.id,
                page,
                products,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface CourcesProps extends Record<string, unknown> {
    menu: IMenu[];
    firstCategory: TopLevelCategory;
    page: IPageModel;
    products: IProductModel[];
}