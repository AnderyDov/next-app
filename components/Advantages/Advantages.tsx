import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import Check from './check.svg';

export function Advantages({ advantages }: AdvantagesProps): JSX.Element {
    return (
        <>
            {advantages.map((el) => {
                return (
                    <div key={el._id} className={styles.advantage}>
                        <Check />
                        <div className={styles.title}>{el.title}</div>
                        <hr className={styles.vline} />
                        <div className={styles.description}>
                            {el.descripton} Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Illum, cupiditate
                            voluptates vel fugit nihil autem et, maiores
                            corrupti, maxime eum temporibus recusandae. Rerum,
                            ex officiis laboriosam exercitationem repudiandae
                            laborum neque.
                        </div>
                    </div>
                );
            })}
        </>
    );
}
