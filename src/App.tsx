import { BannerSlide } from './components/BannerSlide';
import { Deck } from './components/Deck';
import { FramedInfoSlide } from './components/FramedInfoSlide';
import { Slide } from './components/Slide';
import { TMLogo } from './components/TMLogo';

export const App = () => {
    return (
        <div className="app">
            <Deck>
                <BannerSlide >
                    <div className="wrapper">
                        <div>
                            <TMLogo width={'350px'} height='50px' />
                        </div>
                        <h3>
                            How to Build Cross-Platform Applications with Ease
                        </h3>
                    </div>
                </BannerSlide>
                <FramedInfoSlide>
                    <h2>Introduction</h2>
                    <div>
                        <TMLogo whiteLogo={true} width={'250px'} />
                    </div>
                </FramedInfoSlide>
                <FramedInfoSlide>
                    <h2>Node.js</h2>
                    <div>
                        <TMLogo whiteLogo={true} width={'250px'} />
                    </div>
                </FramedInfoSlide>
                <FramedInfoSlide>
                    <h2>JavaScript</h2>
                    <div>
                        <TMLogo whiteLogo={true} width={'250px'} />
                    </div>
                </FramedInfoSlide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>React</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>REACT APP</Slide>
                </Slide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>Moving to React Native</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                </Slide>
            </Deck>
        </div>
    );
}
