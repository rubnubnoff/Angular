import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { ExampleNg6LibModule } from 'example-ng6-lib';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }, AuthGuard],
  exports: [RouterModule, ExampleNg6LibModule]
})
export class CoreModule { }
