import { gsap } from './index';

/**
 * Reusable animation library for the portfolio
 */
export const animations = {
    // Reveal element on scroll
    reveal: (element, options = {}) => {
        const {
            direction = 'up',
            distance = 50,
            duration = 1,
            delay = 0,
            ease = 'power3.out',
            trigger = element,
            start = 'top 85%',
        } = options;

        const vars = {
            opacity: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
                trigger,
                start,
                toggleActions: 'play none none reverse',
            }
        };

        if (direction === 'up') vars.y = distance;
        else if (direction === 'down') vars.y = -distance;
        else if (direction === 'left') vars.x = distance;
        else if (direction === 'right') vars.x = -distance;

        return gsap.from(element, vars);
    },

    // Staggered reveal for children
    staggerReveal: (elements, options = {}) => {
        const {
            stagger = 0.1,
            direction = 'up',
            distance = 30,
            duration = 0.8,
            trigger = elements[0],
            start = 'top 90%',
        } = options;

        const vars = {
            opacity: 0,
            duration,
            stagger,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger,
                start,
            }
        };

        if (direction === 'up') vars.y = distance;
        else if (direction === 'down') vars.y = -distance;

        return gsap.from(elements, vars);
    },

    // Text typing effect
    typeText: (element, text, duration = 2) => {
        return gsap.to(element, {
            duration,
            text: text,
            ease: "none",
        });
    },

    // Magnetic effect for buttons/icons
    magnetic: (element, options = {}) => {
        const { strength = 0.5, duration = 0.6 } = options;
        const trigger = element;
        
        const move = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = trigger.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            gsap.to(element, {
                x: x * strength,
                y: y * strength,
                duration: duration,
                ease: 'power2.out'
            });
        };
        
        const reset = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: duration,
                ease: 'elastic.out(1, 0.3)'
            });
        };
        
        trigger.addEventListener('mousemove', move);
        trigger.addEventListener('mouseleave', reset);
        
        return () => {
            trigger.removeEventListener('mousemove', move);
            trigger.removeEventListener('mouseleave', reset);
        };
    },

    // Elegant skew reveal for titles
    skewReveal: (element, options = {}) => {
        const {
            duration = 1.2,
            skew = 10,
            distance = 100,
            ease = 'power4.out',
            trigger = element,
            start = 'top 85%'
        } = options;

        return gsap.from(element, {
            opacity: 0,
            y: distance,
            skewY: skew,
            duration,
            ease,
            scrollTrigger: {
                trigger,
                start,
                toggleActions: 'play none none reverse'
            }
        });
    },

    // Parallax effect for background elements
    parallax: (element, options = {}) => {
        const { speed = 0.2, trigger = element } = options;
        
        return gsap.to(element, {
            y: (index, target) => -ScrollTrigger.maxScroll(window) * speed,
            ease: "none",
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
};
