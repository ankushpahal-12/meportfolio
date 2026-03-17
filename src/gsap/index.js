import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Configure global defaults
gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});

export { gsap, ScrollTrigger, ScrollToPlugin, TextPlugin };
export default gsap;
