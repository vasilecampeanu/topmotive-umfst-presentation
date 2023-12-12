import { Deck } from './components/Deck';
import { FramedInfoSlide } from './components/FramedInfoSlide';
import { Slide } from './components/Slide';
import { TMLogo } from './components/TMLogo';

export const App = () => {
    return (
        <div className="app">
            <Deck>
                <Slide>Slide 1</Slide>
                <FramedInfoSlide>
                    <h2>Introduction</h2>
                    <TMLogo whiteLogo={true} width={'250px'} />
                </FramedInfoSlide>
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
