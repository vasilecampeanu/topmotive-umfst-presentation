import { BannerSlide } from './components/BannerSlide';
import { Barebone } from './components/Barebone';
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
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>Introduction</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <h2>What we do?</h2>
                    </Slide>
                </Slide>
                <FramedInfoSlide>
                    <h2>Overview</h2>
                    <div>
                        <TMLogo whiteLogo={true} width={'250px'} />
                    </div>
                </FramedInfoSlide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>JavaScript</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <img src="jspopular.png" alt="" />
                    </Slide>                  
                    <Slide>
                        <h2>Key Features</h2>
                        <ul>
                            <li>Dynamic Typing</li>
                            <li>First-Class Functions</li>
                            <li>Asynchronous Processing</li>
                        </ul>
                    </Slide>                  
                    <Slide>
                        <img src="betterthanjs.png" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Typescript</h2>
                    </Slide>
                    <Slide>
                        <img src="you_being_awesome.png" height="850px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Key Features</h2>
                        <ul>
                            <li>Enhanced Code Quality and Readability</li>
                            <li>Early Detection of Errors and Bugs</li>
                            <li>Improved Development Experience</li>
                            <li>Easier Refactoring and Maintainability</li>
                        </ul>
                    </Slide>                  
                </Slide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>Node.js</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <h2>NPM</h2>
                    </Slide>
                    <Slide>
                        <h2>node_modules</h2>
                        <img src="./node_modules.png" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Further Research</h2>
                    </Slide>
                </Slide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>React</h2>
                        <Barebone />
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <h2>History</h2>
                    </Slide>
                    <Slide>
                        <h2>Functional Programming</h2>
                    </Slide>
                    <Slide>
                        <h2>Composition</h2>
                    </Slide>
                    <Slide>
                        <h2>Virtual DOM (Document Object Model):</h2>
                        <center>
                            <img src="vdom.png" alt="" />
                        </center>
                    </Slide>
                    <Slide>
                        <h2>Further Research</h2>
                    </Slide>
                    <Slide>
                        <h2>Why React?</h2>
                    </Slide>
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
