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
    const { register, control, handleSubmit } = useForm<IReviewForm>();

    function onSubmit(data: IReviewForm) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input placeholder='имя' />
                <Input placeholder='имя' className={styles.title} />
                <div className={styles.rating}>
                    <span>оценка: </span>
                    <Rate rate={0} />
                </div>
                <Textarea
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
