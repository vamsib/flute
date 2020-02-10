import { html } from '/web_modules/lit-html.js';
import { initElement } from '../../lib/customElements.js';
import '../../features/guest-form/index.js';
import '../../features/greeting-message/index.js';
import '../../features/main-nav/index.js';
import { guests, onArrival } from '../../data/guests.js';
import { rx } from '../../lib/rx.js';

const layout = () =>  html`
  <h1>Guest book</h1>
  <main-nav></main-nav>
  <guest-form .onArrival=${onArrival}></guest-form>
  <greeting-message
    .guest=${rx(guests)}></greeting-message>
`;

const HomePage = initElement(
  "home-page", layout
);

export { 
  HomePage 
};

