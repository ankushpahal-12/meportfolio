import { useLayoutEffect, useRef } from 'react';
import { gsap } from './index';
export const useGSAP = (callback, dependencies = []) => {
    const root = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(callback, root);
        return () => ctx.revert();
    }, dependencies);

    return root;
};
