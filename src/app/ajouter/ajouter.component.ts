import { Component, OnInit } from '@angular/core';
/*import {OptionsService} from "../shared/options-service/options.service";*/

@Component({
  selector: 'nto-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})

export class AjouterComponent implements OnInit {

  constructor(/*private _optionsService: OptionsService*/) { }

  ngOnInit() {
  }

   /* private _ajouter(option: any) {
        this._optionsService
            .create(option)
            .flatMap(_ => this._optionsService.fetch());
    }*/

}