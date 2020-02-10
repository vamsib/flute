import { BehaviorSubject, concat } from '/web_modules/rxjs.js';
import { first } from '/web_modules/rxjs/operators/index.js';

const activities = new BehaviorSubject([]);

(async function() {
  const response = await fetch('https://api.myjson.com/bins/z17a6');
  const actualActivities = await response.json();
  activities.next(actualActivities);
})();

const onSelectionChange = (activityId, isSelected) => {
  console.log(activityId, isSelected);
  activities.pipe(first(activity => activity.id === activityId))
    .subscribe(activity => activity.isSelected = isSelected);
}

export {
  activities,
  onSelectionChange
};
