import { Deck } from './components/Deck';
import { Slide } from './components/Slide';

export const App = () => {
    return (
        <div className="app">
            <Deck>
                <Slide>Slide 1</Slide>
                <Slide branded={false}>
                    <Slide>Slide 2</Slide>
                    <Slide>Slide 3</Slide>
                    <Slide>Slide 4</Slide>
                </Slide>
                <Slide>Slide 5</Slide>
            </Deck>
        </div>
    );
}
