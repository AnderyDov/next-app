import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { Htag, Button, P, Rate, Input } from '../components';
import { IMenu } from '../interfaces/menu.interface';
import withLauout from '../layout/Layout';

function Home() {
    const [rate, setRate] = useState<number>(4);

    return (
        <>
            <Htag tag='h3'>HELLO WORLD</Htag>
            <Link href='/cources/excel'>EXCEL</Link>
            <hr />
            <Button onClick={() => alert('work')} appearens='primary'>
                Кнопка
            </Button>
            <Button arrow='right' appearens='ghost'>
                Кнопка
            </Button>
            <P size='l'>paragraf example</P>
            <div>
                <Rate isEditadle={true} rate={rate} setRate={setRate} />
            </div>
            <Input placeholder='текст' />
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
