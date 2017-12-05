import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/mergeMap';
import 'rxjs/add/observable/filter';

@Component({
  selector: 'nto-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    // une option
    private _option: any;

    /**
     * Constructeur
     *
     * @param _optionsService
     */
    constructor(private _optionsService, private _router: ActivatedRoute) {
        this._option = {};
    }

    /**
     * Retourne une option
     *
     * @returns {any}
     */
    get option(): any[] {
        return this._option;
    }

    /**
     * Initialisation
     */
    ngOnInit() {
        Observable
            .merge(
                this._router.params
                    .filter(params => !!params['id'])
                    .flatMap(params => this._optionsService.fetchOne(params['id']))
            )
            .subscribe((option: any[]) => this._option = option);
    }

}
