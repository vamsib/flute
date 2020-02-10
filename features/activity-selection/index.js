import { html } from '/web_modules/lit-html.js';
import { initElement } from '../../lib/customElements.js';

const activitySelection = ({ activities, onSelectionChange }) => html`
  <ul>
  ${activities.map(activity => html`
    <li>
      <input type="checkbox" value=${activity.id}
        @change=${onSelectionChange(activity.id)} />
      <label class=${activity.isSelected ? "selected" : ""}
        for=${activity.id}>${activity.name}</label>
    </li>
  `)}
  </ul>
`;

const ActivitySelection = initElement(
  "activity-selection", activitySelection, [], ["activities", "onSelectionChange"]
);

export {
  ActivitySelection
}
