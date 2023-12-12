// @ts-ignore
import Reveal from 'reveal.js';
// @ts-ignore
import RevealNotes from 'reveal.js/plugin/notes/notes';
// @ts-ignore
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';

import { ReactNode, useEffect } from "react";
import { options } from '../common/Options';

interface DeckProps {
    children: ReactNode;
}

export const Deck: React.FC<DeckProps> = ({ children }) => {
    useEffect(() => {
        Reveal.initialize({
            ...options,
            disableLayout: true,
            plugins: [RevealNotes, RevealMarkdown],
        });
    }, []);

    return (
        <div className="reveal">
            <div className="slides">{children}</div>
        </div>
    );
};
