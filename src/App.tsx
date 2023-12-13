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
                        <div>Presented by</div>
                        <div><b>Marina Timus</b> & <b>Vasile Campeanu</b></div>
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
                        <center>
                            <img src="dvserologo.png" width="120px" alt="" />
                        </center>
                        <img src="dvsero.png" width="900px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>What we do?</h2>
                    </Slide>
                    <Slide>
                        <img src="fastcalc.jpeg" alt="" />
                    </Slide>
                </Slide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>Presentation Overview</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <ul>
                            <li>JavaScript/TypeScript</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>
                    </Slide>
                </Slide>
                <Slide branded={false}>
                    <FramedInfoSlide>
                        <h2>JavaScript</h2>
                        <div>
                            <TMLogo whiteLogo={true} width={'250px'} />
                        </div>
                    </FramedInfoSlide>
                    <Slide>
                        <img src="webstack.jpg" width="600px" alt="" />
                    </Slide>
                    <Slide>
                        <img src="jspopular.png" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Characteristics</h2>
                    </Slide>
                    <Slide>
                        <h2>Dynamic Typing</h2>
                        <img src="dtyping.png" width="1000px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Functional Programming</h2>
                        <img src="fprogramming.png" width="1000px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Asynchronous Processing</h2>
                        <img src="aprogramming.png" width="1000px" alt="" />
                    </Slide>
                    <Slide>
                        <img src="betterthanjs.png" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Typescript</h2>
                    </Slide>
                    <Slide>
                        <img src="javascript.png" width="650px" alt="" />
                        <img src="typescript.png" width="650px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Key Differences</h2>
                        <ul>
                            <li>Type Annotations</li>
                            <li>Compile-Time Type Checking</li>
                            <li>JavaScript Compatibility</li>
                            <li>Tooling and Editor Support</li>
                        </ul>
                    </Slide>
                    <Slide>
                        <h2>How does it work?</h2>
                        <img src="you_being_awesome.png" height="750px" alt="" />
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
                        <img src="./npm.png" width="400px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>node_modules</h2>
                        <img src="./node_modules.png" alt="" />
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
                        <h2>Framework vs Library</h2>
                    </Slide>
                    <Slide>
                        <h2>Components</h2>
                        <img src="./button_component.png" width="1000px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Composition</h2>
                        <img src="./composition.png" width="900px" alt="" />
                    </Slide>
                    <Slide>
                        <h2>Reactive Programming</h2>
                    </Slide>
                    <Slide>
                        <h2>Virtual DOM (Document Object Model):</h2>
                        <center>
                            <img src="vdom.png" alt="" />
                        </center>
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
