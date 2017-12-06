// CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionComponent } from './option/option.component';
import {APP_ROUTES} from './app.routes';
import { OptionsComponent } from './options/options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {OptionsService} from './shared/options-service/options.service';
import { FormComponent } from './shared/form/form.component';
import { EditerComponent } from './editer/editer.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { NoteComponent } from './shared/note/note.component';
import {NoteService} from './shared/note-services/note.service';
import { FormNoteComponent } from './shared/form-note/form-note.component';

@NgModule({
   declarations: [AppComponent, HomeComponent, OptionComponent, OptionsComponent, FormComponent, EditerComponent, AjouterComponent, NoteComponent, FormNoteComponent],
  imports: [
    BrowserModule, FormsModule, APP_ROUTES,
      HttpClientModule, HttpModule, ReactiveFormsModule
  ],
  providers: [OptionsService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
