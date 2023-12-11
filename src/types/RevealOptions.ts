// @ts-ignore
import Reveal from 'reveal.js/dist/reveal';

export interface RevealOptions {
    controls: boolean;
    controlsTutorial: boolean;
    controlsLayout: 'edges' | 'bottom-right';
    controlsBackArrows: 'faded' | 'hidden' | 'visible';
    progress: boolean;
    slideNumber: boolean;
    hash: boolean;
    history: boolean;
    keyboard: { [key: number]: string };
    overview: boolean;
    center: boolean;
    touch: boolean;
    loop: boolean;
    rtl: boolean;
    navigationMode: 'default';
    shuffle: boolean;
    fragments: boolean;
    fragmentInURL: boolean;
    embedded: boolean;
    help: boolean;
    showNotes: boolean;
    autoPlayMedia: null | boolean;
    preloadIframes: null | boolean;
    autoSlide: number;
    autoSlideStoppable: boolean;
    autoSlideMethod: () => void;
    defaultTiming: number;
    mouseWheel: boolean;
    hideInactiveCursor: boolean;
    hideCursorTime: number;
    hideAddressBar: boolean;
    previewLinks: boolean;
    transition: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
    transitionSpeed: 'default' | 'fast' | 'slow';
    backgroundTransition: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
    viewDistance: number;
    parallaxBackgroundImage: string;
    parallaxBackgroundSize: string;
    parallaxBackgroundHorizontal: number | null;
    parallaxBackgroundVertical: number | null;
    display: string;
}
