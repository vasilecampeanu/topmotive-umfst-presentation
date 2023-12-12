import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { App } from './App';

import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './styles/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);
