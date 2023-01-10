import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { Htag, Button, P, Rate } from '../components';
import { IMenu } from '../interfaces/menu.interface';
import { IPageModel } from '../interfaces/page.interface';
import withLauout from '../layout/Layout';

function Home({ menu }: HomeProps) {
    const [rate, setRate] = useState<number>(4);

    return (
        <>
            <Htag tag='h3'>HELLO WORLD</Htag>
            <hr />
            <Button onClick={() => alert('work')} appearens='primary'>
                Кнопка
            </Button>
            <Button arrow='right' appearens='ghost'>
                Кнопка
            </Button>
            <P size='l'>paragraf example</P>
            <Rate isEditadle={true} rate={rate} setRate={setRate} />
            <ul>
                {menu.map((el) => {
                    return (
                        <li key={el._id.secondCategory}>
                            <Link href='/cources'>{el._id.secondCategory}</Link>{' '}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default withLauout(Home);

export const getStaticProps = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<IMenu[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        {
            firstCategory,
        },
    );

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: IMenu[];
    firstCategory: number;
    page: IPageModel;
}
