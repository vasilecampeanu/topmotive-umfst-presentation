// @ts-ignore
import Reveal from 'reveal.js';
// @ts-ignore
import RevealNotes from 'reveal.js/plugin/notes/notes';
// @ts-ignore
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';

import { ReactNode, useEffect } from "react";
import { options } from '../common/Options';

import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

interface DeckProps {
    children: ReactNode;
}

export const Deck: React.FC<DeckProps> = ({ children }) => {
    useEffect(() => {
        Reveal.initialize({
            ...options,
            plugins: [RevealNotes, RevealMarkdown],
        });
    }, []);

    return (
        <div className="reveal">
            <div className="slides">{children}</div>
        </div>
    );
};
