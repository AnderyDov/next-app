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
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IReviewForm>();

    function onSubmit(data: IReviewForm) {
        console.log(productId);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', {
                        required: { value: true, message: 'Заполните имя' },
                    })}
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input
                    {...register('title', {
                        required: {
                            value: true,
                            message: 'Заполните заголовок',
                        },
                    })}
                    placeholder='Заголовок отзыва'
                    className={styles.title}
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>оценка: </span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{
                            required: {
                                value: true,
                                message: 'Поставьте оценку',
                            },
                        }}
                        render={({ field }) => (
                            <Rate
                                ref={field.ref}
                                isEditable
                                rating={field.value}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', {
                        required: { value: true, message: 'Напишите отзыв' },
                    })}
                    placeholder='текст отзыва'
                    className={styles.description}
                    error={errors.description}
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
