import { Component, OnInit } from '@angular/core';
import {OptionsService} from "../shared/options-service/options.service";
import { Router} from "@angular/router";

@Component({
  selector: 'nto-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})

export class AjouterComponent implements OnInit {

  constructor(private _optionsService: OptionsService, private _router: Router) { }

  ngOnInit() {
  }

  ajouter(option: any) {
       this._optionsService
           .create(option)
           .flatMap(_ => this._optionsService.fetch());
      this._router.navigate(['/option', option.id]);

   }
}