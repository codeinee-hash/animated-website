import { useEffect, useState } from 'react';

export function useResponsive(query: string): boolean {
    const [matches, setMatches] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    );

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        }

        matchMedia.addEventListener('change', handleChange);

        return () => matchMedia.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}
