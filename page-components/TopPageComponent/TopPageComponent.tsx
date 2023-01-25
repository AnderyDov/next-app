import { Advantages, HhData, Htag } from '../../components';
import { Tag } from '../../components';
import { TopPageComponent } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

export function TopPageComponent({
    firstCategory,
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
            {firstCategory === TopLevelCategory.Courses && page && (
                <HhData {...page.hh} />
            )}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            )}
            {page.seoText && (
                <div
                    className={styles.seo}
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                />
            )}
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
