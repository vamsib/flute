import { html } from '/web_modules/lit-html.js';
import page from '/web_modules/page.js';
import { initElement } from '../../lib/customElements.js';

const mainNav = () =>  html`
  <nav>
    <a href="/" @click=${(e) => {
      page('/')
      e.preventDefault();
    }}>Home</a>
    &nbsp;|&nbsp;
    <a href="/activities" @click=${(e) => {
      page('/activities')
      e.preventDefault();
    }}>Activities</a>
  </nav>
`;

const MainNav = initElement(
  "main-nav", mainNav
);

export { 
  MainNav 
};
