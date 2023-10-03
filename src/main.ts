
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { APHButtonComponent } from './app/aphbutton/aphbutton.component';

(async () => {

  const app = await createApplication({
    providers: [
    ],
  });

  const buttonElement = createCustomElement(APHButtonComponent, {
    injector: app.injector,
  });

  customElements.define('aph-button', buttonElement);

})();
