
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { APHButtonComponent } from './app/aphbutton/aphbutton.component';
import { APHInputComponent } from './app/controls/aphinput/aphinput.component';
import { APHCheckboxComponent } from './app/controls/aphcheckbox/aphcheckbox.component';
import { APHCountrySelectComponent } from './app/controls/aphcountry-select/aphcountry-select.component';
import { APHPhoneInputComponent } from './app/controls/aphphone-input/aphphone-input.component';
import { APHRadioComponent } from './app/controls/aphradio/aphradio.component';
import { APHSearchDropdownComponent } from './app/controls/aphsearch-dropdown/aphsearch-dropdown.component';
import { APHSkeletonComponent } from './app/loaders/aphskeleton/aphskeleton.component';

(async () => {

  const app = await createApplication({
    providers: [
    ],
  });

  const components = [
    { name: 'aph-button', component: APHButtonComponent },
    { name: 'aph-input', component: APHInputComponent },
    { name: 'aph-checkbox', component: APHCheckboxComponent },
    { name: 'aph-country-select', component: APHCountrySelectComponent },
    { name: 'aph-phone-input', component: APHPhoneInputComponent },
    { name: 'aph-radio', component: APHRadioComponent },
    { name: 'aph-search-dropdown', component: APHSearchDropdownComponent },
    { name: 'aph-skeleton', component: APHSkeletonComponent },
  ]
  for (let item of components) {
    const element = createCustomElement(item.component, {
      injector: app.injector
    });
    customElements.define(item.name, element);
  }
})();
