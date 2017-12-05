// CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionComponent } from './option/option.component';
import {APP_ROUTES} from "./app.routes";
import { OptionsComponent } from './options/options.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {OptionsService} from "./shared/options-service/options.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, OptionComponent, OptionsComponent],
  imports: [
    BrowserModule, FormsModule, APP_ROUTES,
      HttpClientModule, HttpModule
  ],
  providers: [OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
