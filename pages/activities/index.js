import { html } from '/web_modules/lit-html.js';
import { initElement } from '../../lib/customElements.js';
import { rx } from '../../lib/rx.js';
import '../../features/main-nav/index.js';
import '../../features/activity-selection/index.js';
import { activities, onSelectionChange } from '../../data/activities.js';

const layout = () =>  html`
  <h1>Choose Activities</h1>
  <main-nav></main-nav>
  <activity-selection .activities=${rx(activities)}
    .onSelectionChange=${activityId => e => onSelectionChange(
      activityId, e.target.checked
    )}>
    </activity-selection>
`;

const ActivitiesPage = initElement(
  "activities-page", layout
);

export { 
  ActivitiesPage 
};
