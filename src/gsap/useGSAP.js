import { useLayoutEffect, useRef } from 'react';
import { gsap } from './index';

/**
 * A custom hook for GSAP animations that handles cleanup automatically.
 * Similar to @gsap/react but lightweight for this project.
 */
export const useGSAP = (callback, dependencies = []) => {
    const root = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(callback, root);
        return () => ctx.revert();
    }, dependencies);

    return root;
};
