import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import Glas from './glas.svg';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    function goToSearch() {
        router.push({ pathname: '/search', query: { q: search } });
    }

    function handelKeyDown(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            goToSearch();
        }
    }

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                placeholder='Поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                onKeyDown={handelKeyDown}
            />
            <Button
                appearens='primary'
                className={styles.button}
                onClick={goToSearch}
            >
                <Glas />
            </Button>
        </div>
    );
};
