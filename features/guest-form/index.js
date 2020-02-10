import { html } from '/web_modules/lit-html.js';
import { initElement } from '../../lib/customElements.js';

function onSubmit(callback) {
  return function(e) {
    e.preventDefault();
    callback(e.target.querySelector('#guest-name').value);
  }
}

const guestForm = ({ onArrival }) => html`
  <form name="greeting" action="/greet" method="get"
    @submit=${onSubmit(onArrival)}>
    <label for="guest-name">Enter your name: </label>
    <input type="text" name="guest-name" id="guest-name" />
    <button type="submit">Submit</button>
  </form>
`;

const GuestForm = initElement(
  "guest-form", guestForm, [],["onArrival"]);

export {
  GuestForm 
};
