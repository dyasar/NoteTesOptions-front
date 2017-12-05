import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from "./home/home.component";
import {OptionComponent} from "./option/option.component";
import {OptionsComponent} from "./options/options.component";

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'option', component: OptionComponent },
    { path: 'options', component: OptionsComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
