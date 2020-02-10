import { BehaviorSubject } from '/web_modules/rxjs.js';

const guests = new BehaviorSubject({ name: "Madhuri" });

const onArrival = (guestName) => {
  guests.next({ name: guestName });
};

export {
  guests,
  onArrival
};
