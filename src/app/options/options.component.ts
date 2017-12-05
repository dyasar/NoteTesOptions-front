import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/defaultIfEmpty';

@Component({
  selector: 'nto-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  // liste des options
  private _options: any[];

    /**
     * Constructeur
     *
     * @param _optionsService
     */
  constructor(private _optionsService) {
        this._options = [];
  }

    /**
     * Retourne la liste des options
     *
     * @returns {any[]}
     */
  get options(): any[] {
    return this._options;
  }


    /**
     * Initialisation
     */
    ngOnInit() {
        this._optionsService
            .fetch()
            .subscribe((options: any[]) => this._options = options);
    }

}
