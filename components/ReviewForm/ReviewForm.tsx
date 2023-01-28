import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rate } from '../Rate/Rate';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({
    productId,
    className,
    ...props
}: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit } = useForm<IReviewForm>();

    function onSubmit(data: IReviewForm) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input {...register('name')} placeholder='имя' />
                <Input
                    {...register('title')}
                    placeholder='Заголовок отзыва'
                    className={styles.title}
                />
                <div className={styles.rating}>
                    <span>оценка: </span>
                    <Controller
                        control={control}
                        name='rating'
                        render={({ field }) => (
                            <Rate
                                ref={field.ref}
                                isEditable
                                rating={field.value}
                                setRating={field.onChange}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description')}
                    placeholder='текст отзыва'
                    className={styles.description}
                />
                <div className={styles.submit}>
                    <Button appearens='primary'>отправить</Button>
                    <span className={styles.info}>
                        * перед публикацией отзыв пройдёт предварительную
                        модерацию ипроверку
                    </span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Выш отзыв отправлен</div>
                <div>Спасибо ваш отзыв будетопубликован после проверки</div>
                <CloseIcon className={styles.close} />
            </div>
        </form>
    );
};
