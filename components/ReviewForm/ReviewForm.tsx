import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rate } from '../Rate/Rate';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

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
        reset,
    } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    async function onSubmit(formData: IReviewForm) {
        try {
            const { data } = await axios.post<IReviewSentResponse>(
                API.review.createDemo,
                {
                    ...formData,
                    productId,
                },
            );
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('что то пошло не так');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message);
        }
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
            {isSuccess && (
                <div className={cn(styles.success, styles.panel)}>
                    <div className={styles.successTitle}>
                        Выш отзыв отправлен
                    </div>
                    <div>Спасибо ваш отзыв будетопубликован после проверки</div>
                    <CloseIcon
                        className={styles.close}
                        onClick={() => setIsSuccess(false)}
                    />
                </div>
            )}
            {error && (
                <div className={cn(styles.error, styles.panel)}>
                    Что то пошло не так, попробуйте обновить страницу
                    <CloseIcon
                        className={styles.close}
                        onClick={() => setError(undefined)}
                    />
                </div>
            )}
        </form>
    );
};
