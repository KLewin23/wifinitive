import { useEffect, useState } from 'react';

export default () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
};
