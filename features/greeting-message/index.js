import { html } from '/web_modules/lit-html.js';
import { initElement } from '../../lib/customElements.js';

const greetingMessage = ({ guest: { name }}) =>  html`
  <h1>Hello ${name}</h1>
`;

const GreetingMessage = initElement(
  "greeting-message", greetingMessage, [], ["guest"]
);

export { 
  GreetingMessage 
};
