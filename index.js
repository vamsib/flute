import { html, render } from '/web_modules/lit-html.js';
import page from '/web_modules/page.js';

page('/', function(context, next) {
  import('./pages/home/index.js').then(() => {
    render(html`<home-page></home-page>`, document.body);
  });
});

page('/activities', function(context, next) {
  import('./pages/activities/index.js').then(() => {
    render(html`<activities-page></activities-page>`, document.body);
  });
});

page();
