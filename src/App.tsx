import { Deck } from './components/Deck';

export const App = () => {
    return (
        <div className="app">
            <Deck>
                <section data-transition={'fade'}>Hello</section>
                <section data-transition={'fade'}>Hello</section>
            </Deck>
        </div>
    );
}
