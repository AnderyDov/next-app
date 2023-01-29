import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { Htag, Button, P, Rate, Input } from '../components';
import { Textarea } from '../components/Textarea/Textarea';
import { API } from '../helpers/api';
import { IMenu } from '../interfaces/menu.interface';
import withLauout from '../layout/Layout';

function Home() {
    const [rate, setRating] = useState<number>(4);

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
            <Rate isEditable={true} rating={rate} setRating={setRating} />
            <br />
            <Input placeholder='текст' />
            <br />
            <Textarea placeholder='Оставьте отзыв' />
        </>
    );
}

export default withLauout(Home);

export const getStaticProps = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<IMenu[]>(API.topPage.find, {
        firstCategory,
    });

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};
