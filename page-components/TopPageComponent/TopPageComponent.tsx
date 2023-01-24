import { Advantages, HhData, Htag, P } from '../../components';
import { Tag } from '../../components';
import { TopPageComponent } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

export function TopPageComponent({
    firstCategory,
    page,
    products,
}: TopPageComponent): JSX.Element {
    console.log(page.advantages);

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
            {firstCategory === TopLevelCategory.Courses && page && (
                <HhData {...page.hh} />
            )}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            )}
            {page.seoText && <P>{page.seoText}</P>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map((el) => {
                return (
                    <Tag key={el} color='primary'>
                        {el}
                    </Tag>
                );
            })}
        </div>
    );
}
