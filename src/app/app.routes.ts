import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from "./home/home.component";
import {OptionComponent} from "./option/option.component";
import {OptionsComponent} from "./options/options.component";
import {FormComponent} from "./shared/form/form.component";

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'option/:id', component: OptionComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'ajout', component: FormComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
