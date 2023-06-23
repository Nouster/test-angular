import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { DetailedComponent } from './detailed/detailed.component';
import { ClientComponent } from './client/client.component';
import { EffectsDirective } from './client/effects.directive';
import { FormComponent } from './form/form.component';
import { OrdersComponent } from './orders/orders.component';
import {
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const protectedResourceMap = new Map<string, Array<string>>([
  ['https://graph.microsoft.com/v1.0/me', ['user.read']],
  [
    'https://macmickey.azurewebsites.net/',
    ['api://cdb3cfcf-c7a2-41ad-8663-b9f3dde2cee1/all'],
  ],
]);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationComponent,
    DetailedComponent,
    ClientComponent,
    EffectsDirective,
    FormComponent,
    OrdersComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '4a40663b-3bc1-48a5-b673-cd1e02db59c6',
          authority:
            'https://login.microsoftonline.com/79dc337f-197e-43a8-a169-7abadf55f75f', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
          redirectUri: 'http://localhost:4200', // This is your redirect URI
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: [
            'user.read',
            'api://cdb3cfcf-c7a2-41ad-8663-b9f3dde2cee1/all',
          ],
        },
        loginFailedRoute: '/login-failed',
      } as MsalGuardConfiguration,
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap,
      } as MsalInterceptorConfiguration
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
  ],

  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
