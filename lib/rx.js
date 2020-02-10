import { directive } from '/web_modules/lit-html.js';

const rx = directive((observable) => part => {
  observable.subscribe(value => {
    part.setValue(value);
    part.commit();
    part.committer.element.reRender();
  });
});

export {
  rx
};
