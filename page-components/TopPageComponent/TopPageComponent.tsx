import { HhData, Htag } from '../../components';
import { Tag } from '../../components';
import { TopPageComponent } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

export function TopPageComponent({
    page,
    products,
}: TopPageComponent): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page && page.title}</Htag>
                {products && (
                    <Tag color='grey' size='m'>
                        {products.length}
                    </Tag>
                )}
                <span>Сортировка</span>
            </div>
            <div>
                {products &&
                    products.map((el) => <div key={el._id}>{el.title}</div>)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page && page.category}</Htag>
                <Tag color='red' size='m'>
                    hh.ru
                </Tag>
            </div>
            {page && <HhData {...page.hh} />}
        </div>
    );
}
