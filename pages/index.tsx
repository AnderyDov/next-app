import axios from 'axios';
import { API } from '../helpers/api';
import { IMenu } from '../interfaces/menu.interface';
import withLauout from '../layout/Layout';

function Home() {
    return <></>;
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
