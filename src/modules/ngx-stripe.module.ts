import { NgModule, ModuleWithProviders } from '@angular/core';

import { LazyStripeAPILoader } from '../services/api-loader.service';
import { StripeService } from '../services/stripe.service';
import { StripeFactoryService } from '../services/stripe-factory.service';

import { WindowRef } from '../services/window-ref.service';
import { DocumentRef } from '../services/document-ref.service';

import {
  Options,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_OPTIONS
} from '../interfaces/stripe';
import { StripeCardComponent } from '../components/stripe-card.component';
import { StripeIdealBankComponent } from '../components/stripe-ideal-bank.component';

@NgModule({
  declarations: [StripeCardComponent, StripeIdealBankComponent],
  exports: [StripeCardComponent, StripeIdealBankComponent]
})
export class NgxStripeModule {
  public static forRoot(
    publishableKey?: string,
    options?: Options
  ): ModuleWithProviders {
    return {
      ngModule: NgxStripeModule,
      providers: [
        LazyStripeAPILoader,
        StripeService,
        StripeFactoryService,
        WindowRef,
        DocumentRef,
        {
          provide: STRIPE_PUBLISHABLE_KEY,
          useValue: publishableKey
        },
        {
          provide: STRIPE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
