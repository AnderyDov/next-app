import { useEffect, useState } from 'react';

export default function useScrollY(): number {
    const isBrouser = typeof window !== undefined;
    const [scrollY, setScrollY] = useState<number>(0);

    function handleScroll() {
        const currentScrollY = isBrouser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}
