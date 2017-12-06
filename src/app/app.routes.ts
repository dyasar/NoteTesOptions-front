import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from "./home/home.component";
import {OptionComponent} from "./option/option.component";
import {OptionsComponent} from "./options/options.component";
import {AjouterComponent} from "./ajouter/ajouter.component";
import {EditerComponent} from "./editer/editer.component";

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'option/:id', component: OptionComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'ajouter', component: AjouterComponent },
    { path: 'editer/:id', component: EditerComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
