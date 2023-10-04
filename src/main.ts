
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { APHButtonComponent } from './app/aphbutton/aphbutton.component';
import { APHInputComponent } from './app/controls/aphinput/aphinput.component';
import { APHBreadcrumbComponent } from './app/aphbreadcrumb/aphbreadcrumb.component';

(async () => {

  const app = await createApplication({
    providers: [
    ],
  });

  const buttonElement = createCustomElement(APHButtonComponent, {
    injector: app.injector
  });
  const inputElement = createCustomElement(APHInputComponent, {
    injector: app.injector
  });
  const breadcrumbElement = createCustomElement(APHBreadcrumbComponent, {
    injector: app.injector
  });

  customElements.define('aph-button', buttonElement);
  customElements.define('aph-input', inputElement);
  customElements.define('aph-breadcrumb', breadcrumbElement);
})();
